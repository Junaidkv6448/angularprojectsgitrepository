import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Employee } from 'src/app/shared/employee';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {


  //assign default page

  page: number = 0;
  filter: string;
  constructor(public empService: EmployeeService, private toxterService: ToastrService, private router: Router) { }

  ngOnInit(): void {

    this.empService.bindEmployee();
    
  }

  //populate form
  populateform(emp: Employee) {

    console.log(emp);

    var datepipe = new DatePipe("en-UK");
    let formatedDate: any = datepipe.transform(emp.DateOfJoining, "yyyy-MM-dd");
    emp.DateOfJoining = formatedDate;
    this.empService.formData = emp;
    this.empService.formData = Object.assign({}, emp);

  }

  deleteform(emp: Employee) {

    console.log(emp);

    if (confirm("Are you sure ?")) {
      this.empService.deleteEmployee(emp.EmployeeId).subscribe(
        (result) => {
          console.log("result" + result);

          this.toxterService.error('Employee details Deletes!', 'Deleted!');
          this.empService.bindEmployee();
        }, (error) => {
          this.toxterService.error('unexpected error occured!', 'Eroro!');
        }
      );
    }


  }

  upemp(empId: number) {
    console.log(empId);
    this.router.navigate(['employee', empId])

  }


}
