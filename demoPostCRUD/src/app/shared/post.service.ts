import { Injectable } from '@angular/core';
import{Post}from"./post";
import {Category} from'./category';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  formData:Post=new Post();
  categories:Category[];
  posts:Post[];
  constructor( private httpClient:HttpClient) { }

  bindCategories(){
    this.httpClient.get(environment.apiUrl+"api/Post/GetCategories")
    .toPromise().then(response=>
      this.categories=response as Category[])
  
  }
  bindPosts(){
    this.httpClient.get(environment.apiUrl+"api/Post/GetPosts")
    .toPromise().then(response=>
      this.posts=response as Post[])
  
  }

  //insert Post
insertPost(post:Post):Observable<any>
{
  return this.httpClient.post(environment.apiUrl+"api/Post/addPost",post);

}

}
