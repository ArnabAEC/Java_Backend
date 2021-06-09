import { Component, OnInit } from '@angular/core';
import {FlightModel} from '../flight.model';
import { FlightService } from '../service/flight.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  flights: FlightModel[] = [];
  logged: boolean = false;

  constructor(private service: FlightService, private router: Router) {
    
   }

  ngOnInit(): void {
    // if(localStorage.getItem('user')==null){
    //   this.router.navigate(['login']);
    // }
    // this.flights = this.service.getList();
    // this.logged = this.service.logged;
    this.service.listFlights().then((data) => this.flights = data);
  }
  remove(code: number){
    var answer = confirm('Are you sure to delete entry?');
    if(answer){
      this.service.delflight(code);
      location.reload();
      console.log("Sending del request to service, code: "+code);
    }
     
  }
   orderByCarrier(){
     this.flights.sort((a,b)=> (a.carrier>b.carrier)? 1 : ((a.carrier<b.carrier)? -1: 0));
   }

   update(pfcode : number){
    this.router.navigate((['edit']),{queryParams : { pfcode: pfcode}}).then(()=>
      location.reload()
  );
   }

   orderByPrice(){
     this.flights.sort((a,b)=> (a.price>b.price)? 1 : ((a.price<b.price)? -1: 0));
   }

}
