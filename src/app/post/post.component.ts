import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostRemoteService} from "../remote/post-remote.service";
import {CommentInput, LikeInput, PostDto} from "../remote/dto";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  post: PostDto;
  commentInput = new CommentInput()

  constructor(
    private activatedRoute: ActivatedRoute,
    private postRemoteService: PostRemoteService
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((x: any) => {
      if (x.id) {
        this.getPost(x.id)
      }
    })
  }

  getPost(id: any) {
    this.postRemoteService.getPostById(id).subscribe(x => {
      this.post = x.result
    })
  }

  comment() {
    if (this.commentInput.text.length > 3) {
      this.commentInput.postId = this.post.id
      this.postRemoteService.commentToPost(this.commentInput).subscribe(x => {
        this.getPost(this.post.id)
      })
    }
  }

  like(){
    let input = new LikeInput()
    input.id = this.post.id
    input.isLiked = !this.post.isLikedByCurrentUser
    this.postRemoteService.likePost(input).subscribe(x=>{this.getPost(this.post.id)})
  }

}
