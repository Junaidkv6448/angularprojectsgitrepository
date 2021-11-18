import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/shared/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  constructor(public postService:PostService) { }

  ngOnInit(): void {

    this.postService.bindPosts();
  }



}
