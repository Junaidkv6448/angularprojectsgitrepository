import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/shared/post.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(public postService:PostService ) { }

  ngOnInit(): void {
    this.resetform();
    this.postService.bindCategories();
    console.log(this.postService.categories)
  }




  onSubmit(form: NgForm) {

    console.log(form.value);
    let addId=this.postService.formData.PostId;
//insert

if(addId==0||addId==null)
{
  this.insertPost(form);
  //alert("inserted");


}
//update
else{

  console.log("update");

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
      
    }
  );
}


}
