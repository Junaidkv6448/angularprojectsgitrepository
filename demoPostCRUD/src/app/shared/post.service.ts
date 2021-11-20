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
 // post.CreatedDate=new Date("yyyy-MM-dd");
 console.log("insert....."+post.CreatedDate);
  return this.httpClient.post(environment.apiUrl+"api/Post/addPost",post);

}

//update post

updatePost(post:Post):Observable<any>
{
  return this.httpClient.put(environment.apiUrl+"api/post/updatePost",post);

}


//get  post  by id

getpostbyId(PostId:number):Observable<any>
{
  return this.httpClient.get(environment.apiUrl+"api/post/Getpostbyid?id="+PostId);

}



//delete post

deletePost(PostId:number):Observable<any>
{
  return this.httpClient.delete(environment.apiUrl+"api/post/DeletePost?id="+PostId);

}



}
