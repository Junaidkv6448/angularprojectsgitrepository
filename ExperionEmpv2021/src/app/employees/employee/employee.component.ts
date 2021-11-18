import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from 'src/app/shared/employee.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public empService: EmployeeService) { }

  ngOnInit(): void {

    this.resetform();
    this.empService.bindCmdDepartment();
  }
  onSubmit(form: NgForm) {

    console.log(form.value);
    let addId=this.empService.formData.EmployeeId;
//insert

if(addId==0||addId==null)
{
  this.insertEmployee(form);
  //alert("inserted");


}
//update
else{

  console.log("update");

}




   // alert("submitted");

    //form.resetForm();

  }

  //clear all content at initialisation

  resetform(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
  }

//insert employee
insertEmployee(form?:NgForm)
{
  console.log("inserting employee...")
  this.empService.insertEmployee(form.value).subscribe(
    (result)=>
    {
      console.log("result"+result);
      this.resetform(form);
      //this.toxterService.success('Insert!', 'succes!');
    }
  );
}
//update employee
}
