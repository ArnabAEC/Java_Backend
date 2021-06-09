import { Component, OnInit } from '@angular/core';
import { FlightModel } from '../flight.model';
import { FlightService } from '../service/flight.service';

@Component({
  selector: 'app-by-route',
  templateUrl: './by-route.component.html',
  styleUrls: ['./by-route.component.css']
})
export class ByRouteComponent implements OnInit {

 
  source: string = '';
  destination: string = '';
  flights: FlightModel[] = [];
  constructor(private service: FlightService) { }

  ngOnInit(): void {
  }

  search() {

    this.service.findByRoute(this.source, this.destination).subscribe(data => this.flights = data);

  }
}
