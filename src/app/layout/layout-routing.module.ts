import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from "./layout.component";

const routes: Routes = [
  {
    path:'',
    component:LayoutComponent,
    children:[
      {path:'', loadChildren: () => import('../timeline/timeline.module').then(m => m.TimelineModule)},
      {path:'post/:id', loadChildren: () => import('../post/post.module').then(m => m.PostModule)},
      {path:'profile/:id', loadChildren: () => import('../profile/profile.module').then(m => m.ProfileModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
