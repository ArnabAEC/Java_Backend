import { Component, OnInit } from '@angular/core';
import { Emp } from '../emp/emp.model';
import { MyServiceService } from '../my-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  emp : Emp = new Emp();
  constructor(private service : MyServiceService, private router: Router, private aroute: ActivatedRoute) { 

  }

  ngOnInit(): void {
    this.aroute.queryParams.pipe(filter(params => params.eno)).subscribe(params => { 
      var peno = params.eno;
      this.service.findByEmpNo(peno).subscribe(data => this.emp = data);
    });
  }

  update(){
    this.service.editEmp(this.emp);
    this.router.navigate(['list']);
  }

}
