import { Component, OnInit } from '@angular/core';
import { Emp } from '../emp/emp.model';
import { MyServiceService } from '../my-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  emp:Emp = new Emp();
  constructor(private service: MyServiceService, private router:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('user')==null){
      this.router.navigate(['login']);
    }
  }

  add(){
console.log(this.emp);
this.service.addEmp(this.emp);
this.router.navigate(['list']);
  }


}
