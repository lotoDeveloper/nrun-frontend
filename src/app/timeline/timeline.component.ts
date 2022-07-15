import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {CreateNewPostDialogComponent} from "./create-new-post-dialog/create-new-post-dialog.component";

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  constructor(
    private matDialog: MatDialog
  ) {
  }

  ngOnInit(): void {

  }

  openCreateNewPostDialog() {
    this.matDialog.open(CreateNewPostDialogComponent, {
      width: '100%'
    })
  }
}
