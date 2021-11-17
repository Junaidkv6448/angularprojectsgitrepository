import { Injectable } from '@angular/core';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  //create an instance of employee
  formData:Employee=new Employee();
  
  constructor() { }
}
