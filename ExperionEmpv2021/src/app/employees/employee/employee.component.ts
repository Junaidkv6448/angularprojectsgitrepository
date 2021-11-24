import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from 'src/app/shared/employee.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/shared/employee';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public empService: EmployeeService, private toxterService: ToastrService, private router: Router,
    private route: ActivatedRoute) { }
  empId: number=0;
  employee: Employee = new Employee();


  ngOnInit(): void {
    //geting emp id
    this.empId = this.route.snapshot.params['empId'];

    this.resetform();
    this.empService.bindCmdDepartment();

    console.log("emp: " + this.empId)


    if (this.empId !=0 && this.empId != null&&this.empId!=undefined) 
    
    {
      console.log("getiing emp" +this.empId)

      this.empService.getEmployeeById(this.empId).subscribe(
        data => {
        console.log(data);

        var datepipe = new DatePipe("en-UK");
        let formatedDate: any = datepipe.transform(data.DateOfJoining, "yyyy-MM-dd");
        data.DateOfJoining = formatedDate;


        this.empService.formData = data;

        this.empService.formData = Object.assign({}, data);
        
      });
    }




  }
  onSubmit(form: NgForm) {

    console.log(form.value);

    let addId = this.empService.formData.EmployeeId;
    //insert

    if (addId == 0 || addId == null) {

      this.insertEmployee(form);

      


    }
    //update
    else {


      this.updateEmployee(form);

    }

    //window.location.reload();
    this.router.navigateByUrl("employeelist");

  }

  //clear all content at initialisation

  resetform(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
  }

  //insert employee
  insertEmployee(form?: NgForm) {
    console.log("inserting employee...")
    this.empService.insertEmployee(form.value).subscribe(
      (result) => {
        console.log("result" + result);

        this.resetform(form);

        this.toxterService.success('Employee details Inserted!', 'succes!');
      }
      , (error) => {
        this.toxterService.error('unexxpected error occured!', 'Eroro!');
      }
    );

  }
  //update employee
  updateEmployee(form?: NgForm) {
    console.log("updating employee...")
    this.empService.updateEmployee(form.value).subscribe(
      (result) => {
        console.log("result" + result);
        this.resetform(form);
        this.toxterService.info('Employee details updated!', 'succes!');
        this.empService.bindEmployee();
      }, (error) => {
        this.toxterService.error('unexxpected error occured!', 'Eroro!');
      }
    );

  }




}
