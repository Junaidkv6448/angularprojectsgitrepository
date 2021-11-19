import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Post } from 'src/app/shared/post';
import { PostService } from 'src/app/shared/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  page:number=0;
  filter:string;
  constructor(public postService:PostService,private toxterService: ToastrService) { }

  ngOnInit(): void {

    this.postService.bindPosts();
  }




 PopulateForm(pos:Post){

    console.log(pos);

    var datepipe=new DatePipe("en-UK");
    let formatedDate:any=datepipe.transform(pos.CreatedDate,"yyyy-MM-dd");
    pos.CreatedDate=formatedDate;
    this.postService.formData=pos;
    this.postService.formData=Object.assign({},pos);

  }



  deletePost(pos:Post)
  {
 
   console.log(pos);
 
   if(confirm("Are you sure ?")){
     this.postService.deletePost(pos.PostId).subscribe(
       (result)=>
       {
         console.log("result"+result);
        
         this.toxterService.error('Post  Deleted!', 'Deleted!');
         this.postService.bindPosts();
       },(error)=>{
         this.toxterService.error('unexpected error occured!', 'Eroro!');
       }
     );
   }  
   
 
  }
 


}
