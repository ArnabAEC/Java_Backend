import { Component, OnInit } from '@angular/core';
import { Emp } from './emp.model';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {

  emp : Emp = new Emp();
  constructor() { }

  ngOnInit(): void {
  }

}
