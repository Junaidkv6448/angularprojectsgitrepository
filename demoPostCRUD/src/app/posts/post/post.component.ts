import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/shared/post.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/shared/post';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  postId:number;
  post:Post=new Post();
  constructor(public postService:PostService ,private toastr: ToastrService,private router: Router
    ,private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.postId=this.route.snapshot.params['postId'];
    this.resetform();
    this.postService.bindCategories();
    console.log(this.postService.categories)



    console.log("postID: " + this.postId)
    if (this.postId != 0 || this.postId != null) {
      this.postService.getpostbyId(this.postId).subscribe(data => {
        console.log(data);

        var datepipe = new DatePipe("en-UK");
        let formatedDate: any = datepipe.transform(data.DateOfJoining, "dd-mm-yyyy");
        //data.DateOfJoining = formatedDate;
        this.postService.formData = data;
        this.postService.formData = Object.assign({}, data);
      });
    }



  }


  



  onSubmit(form: NgForm) {

    console.log(form.value);
    let addId=this.postService.formData.PostId;
//insert

if(addId==0||addId==null)
{
  this.insertPost(form);
  //alert("inserted");
 window.location.reload();



}
//update
else{

  //console.log("update");

 this.updatePost(form);


 window.location.reload();

}


  }




  resetform(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
  }


//insert employee
insertPost(form?:NgForm)
{
  console.log("inserting Post...")
  this.postService.insertPost(form.value).subscribe(
    (result)=>
    {
      console.log("result"+result);
      this.resetform(form);
      this.toastr.success('post registered', 'Success!');
      
    },
    (error)=>{
      this.toastr.error('unexxpected error occured!', 'Eroro!');
    }
  );
  
 
}

//update post

//update employee
updatePost(form?:NgForm)
{
  console.log("updating Post...")
  this.postService.updatePost(form.value).subscribe(
    (result)=>
    {
      console.log("result"+result);
      this.resetform(form);
      this.toastr.info('post details updated!', 'succes!');
      
      
    },(error)=>{
      this.toastr.error('unexxpected error occured!', 'Eroro!');
    }
  );
  
  
}


}
