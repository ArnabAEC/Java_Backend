import { Component, OnInit } from '@angular/core';
import { FlightModel } from '../flight.model';
import { FlightService } from '../service/flight.service';

@Component({
  selector: 'app-by-code',
  templateUrl: './by-code.component.html',
  styleUrls: ['./by-code.component.css']
})
export class ByCodeComponent implements OnInit {

  code: string = '';
  flight: FlightModel = new FlightModel();
  constructor(private service: FlightService) { }

  ngOnInit(): void {
  }

  search() {

    if ((this.service.findByCode(this.code)) == undefined)
      console.log("No data");
    this.service.findByCode(this.code).subscribe(data => this.flight = data);
    console.log('Searching By Route' + this.code);

  }

}
