import {Component, OnInit} from '@angular/core';
import {PostRemoteService} from "../../remote/post-remote.service";
import {ProfileRemoteService} from "../../remote/profile-remote.service";
import {CreatePostInput, FileParameter} from "../../remote/dto";

@Component({
  selector: 'app-create-new-post-dialog',
  templateUrl: './create-new-post-dialog.component.html',
  styleUrls: ['./create-new-post-dialog.component.scss']
})
export class CreateNewPostDialogComponent implements OnInit {

  imageUrl: any
  input = new CreatePostInput()

  constructor(
    private profile: ProfileRemoteService,
    private postRemoteService: PostRemoteService
  ) {
  }

  ngOnInit(): void {
  }

  upload(e: any) {
    let file = e.target.files[0]
    this.profile.upload({
      data: file,
      fileName: file.name
    }).subscribe(x => {
      this.input.image = x.result
    })
  }

  createPost() {
    this.postRemoteService.createPost(this.input).subscribe(x => {
      location.reload()
    })
  }


}
