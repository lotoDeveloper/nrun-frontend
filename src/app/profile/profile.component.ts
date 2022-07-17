import {Component, OnInit} from '@angular/core';
import {ProfileRemoteService} from "../remote/profile-remote.service";
import {ActivatedRoute} from "@angular/router";
import {PostDto, ProfileDto, ProfileInput} from "../remote/dto";
import {AuthService} from "../../auth/auth.service";
import {PostRemoteService} from "../remote/post-remote.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profile: ProfileDto;
  posts: PostDto[];

  constructor(
    private profileRemote: ProfileRemoteService,
    public authService: AuthService,
    private postService: PostRemoteService,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((x: any) => {
      if (x.id) {
        this.getProfile(x.id)
        this.getUserPosts(x.id)
      }
    })
  }

  getProfile(id: number) {
    this.profileRemote.getProfile(id).subscribe(x => {
      this.profile = x.result
    })
  }

  getUserPosts(id: number) {
    this.postService.getPostByUserId(id).subscribe(x => {
      this.posts = x.result
    })
  }

  upload(e: any) {
    this.profileRemote.upload({
      data: e.target.files[0],
      fileName: e.target.files[0].name
    }).subscribe(x => {
      let updateInput = new ProfileInput()
      updateInput.image = x.result
      updateInput.name = this.profile.user.name
      this.profileRemote.updateProfile(updateInput).subscribe(z => {
        location.reload()
      })
    })
  }
}
