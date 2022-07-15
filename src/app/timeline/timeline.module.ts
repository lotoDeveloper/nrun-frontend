import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimelineRoutingModule } from './timeline-routing.module';
import { TimelineComponent } from './timeline.component';
import {MatTabsModule} from "@angular/material/tabs";
import { CreateNewPostDialogComponent } from './create-new-post-dialog/create-new-post-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [
    TimelineComponent,
    CreateNewPostDialogComponent
  ],
  imports: [
    CommonModule,
    TimelineRoutingModule,
    MatTabsModule, MatDialogModule, MatButtonModule, MatFormFieldModule, MatInputModule
  ]
})
export class TimelineModule { }
