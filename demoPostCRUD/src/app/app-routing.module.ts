import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostComponent } from './posts/post/post.component';

const routes: Routes = [
  {path:'',component:PostListComponent},
  {path:'post',component:PostComponent},
  {path:'post/:postId',component:PostComponent},
  {path:'postlist',component:PostListComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
