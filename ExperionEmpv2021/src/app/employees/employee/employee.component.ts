import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor( public empService:EmployeeService  ) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){

    console.log(form.value)

  }

}
