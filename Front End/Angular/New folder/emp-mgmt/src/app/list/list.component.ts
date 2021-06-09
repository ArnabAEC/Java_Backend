import { Component, OnInit } from '@angular/core';
import { Emp } from '../emp/emp.model';
import { MyServiceService } from '../my-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
 
  emps: Emp[] = [];
  logged: boolean = false;

  constructor(private service: MyServiceService, private router: Router) {
    
   }

  ngOnInit(): void {
    if(localStorage.getItem('user')==null){
      this.router.navigate(['login']);
    }
    this.emps = this.service.getList();
    // this.logged = this.service.logged;
  }
  remove(index: number){
    var answer = confirm('Are you sure to delete entry?');
    if(answer)
      this.service.delEmp(index);
  }
  orderByName(){
    this.emps.sort((a,b)=> (a.empName>b.empName)? 1 : ((a.empName<b.empName)? -1: 0));
  }

  orderBySal(){
    this.emps.sort((a,b)=> (a.salary>b.salary)? 1 : ((a.salary<b.salary)? -1: 0));
  }
}
