import { Injectable } from '@angular/core';
import { Emp } from './emp/emp.model';
import { asLiteral } from '@angular/compiler/src/render3/view/util';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {


  baseUrl: string = 'http://localhost:8085/';
  defaultId:string = 'Admin';
  defaultPass:string = 'Password';
  logged: boolean = false;
  empList : Emp[] = [
  ];
  constructor(private http: HttpClient) { }

  async getList(){
    return await this.http.get<Emp[]>(this.baseUrl + '/employees').toPromise();
  }

  addEmp(emp: Emp){
    console.log("add");
    this.http.post(this.baseUrl+"add/",emp).subscribe(data => data = emp);
  }
  editEmp(emp : Emp) {
    console.log("update :"+ emp);
    this.http.put(this.baseUrl+"edit/"+emp.empno,emp).subscribe(data => data = emp);
  }
  delEmp(empno: number){
    return this.http.delete(this.baseUrl+"/del/"+empno).subscribe();
  }

  findByEmpNo(eno: string) {
    return this.http.get<Emp>(this.baseUrl+"/employee/id/"+eno);

  }

  findByEmpName(empName: string){
    return this.http.get<Emp[]>(this.baseUrl+"/employees/name/"+(empName));
  }
}
