import { Component, OnInit } from '@angular/core';
import { LoginModel } from './login.model';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public userId:string = 'test';
  passwd:string = '';
  flag:boolean = false;
  auth : LoginModel = new LoginModel();
  roles : string[] = ["Admin", "User", "Guest"];

  constructor() { 
    this.auth = new LoginModel();
  }

  ngOnInit(): void {
  }
  authenticate(){
    if( this.auth.userId=='admin' && this.auth.passwd=='password')
      this.flag = true;
    else
      alert("Invalid ID/Pass");  
    console.log(this.auth.userId + ':' + this.auth.passwd + ': ['+ this.auth.role+ ']');
  }
  
}
   