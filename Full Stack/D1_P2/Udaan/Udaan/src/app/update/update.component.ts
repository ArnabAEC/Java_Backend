import { Component, OnInit } from '@angular/core';
import { FlightService } from '../service/flight.service';
import { ActivatedRoute, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { FlightModel } from '../flight.model';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  flight : FlightModel = new FlightModel();
  constructor(private service: FlightService, private aroute : ActivatedRoute, private router : Router) { 

  }

  ngOnInit(): void {
    this.aroute.queryParams.pipe(filter(params => params.pfcode)).subscribe(params => { 
      var pfcode = params.pfcode;
      this.service.findByCode(pfcode).subscribe(data => this.flight = data);
    });
  }

  update(){
    this.service.updateFlight(this.flight);
    this.router.navigate(['list']);
  }

}
