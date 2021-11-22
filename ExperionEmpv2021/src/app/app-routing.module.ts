import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { EditemployeeComponent } from './employees/editemployee/editemployee.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeesComponent } from './employees/employees.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { Employee } from './shared/employee';

const routes: Routes = [
  {path: '',redirectTo:"/login",pathMatch:'full'},
  {path: 'login',component: LoginComponent},
  {path: 'contact',component: ContactComponent},
  {path: 'employees',component: EmployeesComponent},
  {path: 'employee',component: EmployeeComponent},
  {path: 'employee/:empId',component: EmployeeComponent},
  {path: 'employeelist',component: EmployeeListComponent},
  {path: 'home',component: HomeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
