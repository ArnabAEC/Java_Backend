import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import { Emp } from '../emp/emp.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchOptions: string[] = ["Name", "Number"];
  searchBy: string = '';
  query: string = '';
  emps: Emp[] = [];
  emp: Emp = new Emp();

  constructor(private service: MyServiceService, private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('user') == null) {
      this.router.navigate(['login']);
    }
  }

  search() {
    console.log("In Search: \n\tQuery: " + this.searchBy)
    switch (this.searchBy) {
      case 'Number':
        if ((this.service.findByEmpNo(this.query)) == undefined)
          console.log("No data");
          this.emps = [];
        this.service.findByEmpNo(this.query).subscribe(data => this.emps.push(data));
 
        console.log('Searching By Number' + this.query);
        break;
      case 'Name': this.service.findByEmpName(this.query).subscribe(data => this.emps = data);
        console.log('Searching By Name' + this.query);
        break;
    }

  }
}
