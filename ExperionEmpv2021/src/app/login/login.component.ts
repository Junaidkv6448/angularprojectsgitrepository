import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from "../shared/user";
import { AuthService } from '../shared/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //declare variables
  loginForm!: FormGroup;
  isSubmitted = false;
  loginUser: User = new User;
  error = '';
  constructor(private formbuilder: FormBuilder,
    private router: Router,public authService:AuthService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group(
      {
        UserName: ['', [Validators.required, Validators.minLength(3)]],
        Userpassword: ['', [Validators.required]],
      }
    );
  }


  //get controls

  get formControls() {
    return this.loginForm.controls;
  }

  //login verify credentials

  LoginCredentials() {

    //console.log(this.loginForm.value);
    this.isSubmitted = true;

    // invalid

    if (this.loginForm.invalid)
      return;
    //valid
    if (this.loginForm.valid) {

      //calling method from Authservice 
      this.authService.getUserByPassword(this.loginForm.value).subscribe
      (data=>
        {
          console.log(data);

          if(data.RoleId===1)
          {
            //logged as admin
            console.log("admin");
            localStorage.setItem("username",data.UserName);
          sessionStorage.setItem("username",data.UserName);
          localStorage.setItem("Access_Role",data.RoleId.toString());
            this.router.navigateByUrl("/admin");
          }
          else if(data.RoleId===2){
            console.log("manager")
            sessionStorage.setItem("username",data.UserName);
            localStorage.setItem("Access_Role",data.RoleId.toString());
            this.router.navigateByUrl("/manager");
          }
          else if(data.RoleId===3){
            console.log("user");
            sessionStorage.setItem("username",data.UserName);
            localStorage.setItem("Access_Role",data.RoleId.toString());
            this.router.navigateByUrl("/user");
          }
          else{
            this.error="Sorry .. invalid authorization"
          }
        },
        error=>
        {
          this.error="invalid"
        }
        )
      //check the role

      //based on role redirect out application
    }
  }
 
}
