import { Injectable } from '@angular/core';
import { Emp } from './emp/emp.model';
import { asLiteral } from '@angular/compiler/src/render3/view/util';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  defaultId:string = 'Admin';
  defaultPass:string = 'Password';
  logged: boolean = false;
  empList : Emp[] = [
    {"empName": 'Arnab', 'empno': 2, job: 'Car', salary: 6000 },
    {"empName": 'Rahul', 'empno': 3, job: 'Kids', salary: 8000 },
    {"empName": 'Divyangshu', 'empno': 1, job: 'Garden', salary: 9000 }
  ];
  constructor() { }

  getList(){
    return this.empList;
  }

  addEmp(emp: Emp){
    this.empList.push(emp);
  }

  delEmp(index: number){
    return this.empList.splice(index,1);
  }

  findByEmpNo(eno: string) : Emp{
    return this.empList.find(x => x.empno == parseInt(eno))as Emp;
  }

  findByEmpName(eno: string) : Emp{
    return this.empList.find(x => x.empName == (eno))as Emp;
  }
}
