import { Component, OnInit } from '@angular/core';
import { FlightModel } from '../flight.model';
import { FlightService } from '../service/flight.service';

@Component({
  selector: 'app-by-carrier',
  templateUrl: './by-carrier.component.html',
  styleUrls: ['./by-carrier.component.css']
})
export class ByCarrierComponent implements OnInit {


 
  query: string = '';
  flight: FlightModel = new FlightModel();
  flights: FlightModel[] = [];
  constructor(private service: FlightService) { }

  ngOnInit(): void {
  }

  search() {

    if ((this.service.findByCarrier(this.query)) == undefined)
      console.log("No data");
    this.service.findByCarrier(this.query).subscribe(data => this.flights = data);
    console.log('Searching By Route' + this.query);

  }

}
