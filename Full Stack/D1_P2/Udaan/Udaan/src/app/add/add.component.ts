import { Component, OnInit } from '@angular/core';
import {FlightModel} from '../flight.model';
import { FlightService } from '../service/flight.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  flight: FlightModel = new FlightModel()
  constructor(private service:FlightService) { }
  
  ngOnInit(): void {
  }

  add(){
    console.log(this.flight);
    this.service.addFlight(this.flight);
  }
}
