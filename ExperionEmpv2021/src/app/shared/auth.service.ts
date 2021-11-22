import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient,private router:Router) { }


  getUserByPassword(user:User):Observable<any>{

    console.log("login")
    console.log("username : "+user.UserName);
    console.log("password : "+user.Userpassword);
   return this.httpClient.get(environment.apiUrl+"api/login/getuser/"+user.UserName+"/"+user.Userpassword);

  }


}
