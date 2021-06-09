import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  id_:string = '';
  pass_: string = '';
  constructor(private service: MyServiceService, private router: Router) { }
  
  ngOnInit(): void {
   }
  login(){
    console.log('id_ : '+ this.id_ + ':' + 'password : ' + this.pass_ );
    if(this.id_==this.service.defaultId && this.pass_==this.service.defaultPass){
      localStorage.setItem('user','Admin');
      console.log('Logged In');
      this.router.navigate(['list']).then(()=>{
        location.reload();
      });
      
    }
    else{
      console.log('Invalid User / Password ');
    }
  }

}
