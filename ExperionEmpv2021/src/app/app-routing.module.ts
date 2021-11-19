import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditemployeeComponent } from './employees/editemployee/editemployee.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeesComponent } from './employees/employees.component';
import { Employee } from './shared/employee';

const routes: Routes = [

  //{path: 'employees',component: EmployeesComponent},
  // {path: 'employee',component: EmployeeComponent},
  // {path: 'employeelist',component: EmployeeListComponent},
  // {path: 'editemployee',component:EditemployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
