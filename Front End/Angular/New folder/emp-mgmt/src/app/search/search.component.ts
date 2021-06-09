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
  searchOptions : string[] = ["Name", "Number"];
  searchBy: string = '';
  query : string = '';
  emp : Emp = new Emp();
  constructor(private service: MyServiceService,private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('user')==null){
      this.router.navigate(['login']);
    }
  }

  search(){
    switch(this.searchBy){
      case 'Number' : this.emp = this.service.findByEmpNo(this.query);
                    console.log('Searching By Number' + this.query);
                    break;
      case 'Name': this.emp = this.service.findByEmpName(this.query); 
                    console.log('Searching By Name' + this.query);
                    break;    
    }
    
  }
}
