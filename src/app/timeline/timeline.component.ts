import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {CreateNewPostDialogComponent} from "./create-new-post-dialog/create-new-post-dialog.component";
import {PostRemoteService} from "../remote/post-remote.service";
import {PostDto} from "../remote/dto";

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
   posts: PostDto[];

  constructor(
    private matDialog: MatDialog,
    private postRemoteService: PostRemoteService
  ) {
  }

  ngOnInit(): void {
    this.getGlobalPost()
  }

  openCreateNewPostDialog() {
    this.matDialog.open(CreateNewPostDialogComponent, {
      width: '100%'
    })
  }

  getGlobalPost(){
    this.postRemoteService.getGlobalPosts(1).subscribe(x=>{
      this.posts = x.result
    })
  }
}
