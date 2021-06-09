import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../login/login.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: string = '';
  passwd: string = '';
  registerRole: string = '';
  roles : String[] = ['Admin', 'User', 'Guest'];
  public storage:LoginModel = new LoginModel();
  constructor() { }

  ngOnInit(): void {
  }

  Save(){
    this.storage.passwd = this.passwd;
    this.storage.userId = this.username;
    this.storage.role = this.registerRole; 
    console.log(this.storage);
  }

}
