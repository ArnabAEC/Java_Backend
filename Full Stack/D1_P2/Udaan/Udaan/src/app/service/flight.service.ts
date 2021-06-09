import { Injectable } from '@angular/core';
import { FlightModel } from '../flight.model';
import {retry} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlightService {


  flightList: FlightModel[] = [

  ];
  baseUrl : string = "http://localhost:8085";
  constructor(private http: HttpClient) { }

  addFlight(flight: FlightModel){
    console.log("service adds");
    this.http.post(this.baseUrl+"/add",flight).subscribe(data=>data = flight);
  }
  async listFlights(){
    return await this.http.get<FlightModel[]>(this.baseUrl + '/flights').pipe(retry(1)).toPromise();
  }

  updateFlight(flight: FlightModel) {
    console.log("update :"+ (flight as FlightModel));
    return this.http.put(this.baseUrl+"/edit/"+flight.code,flight).subscribe(data => data = flight);
  }

  delflight(code: number) {
    console.log("delete request recieved by service. code : "+code);
    this.http.delete(this.baseUrl+'/del/'+code).subscribe();

  }
  getList(): FlightModel[] {
    return this.flightList;
  }
  findByCarrier(query: string) {
    console.log('findByCarrier');
    return this.http.get<FlightModel[]>(this.baseUrl+"/flights/"+(query));
  } 
  findByCode(code: string) {
    console.log('findByCode');
    return this.http.get<FlightModel>(this.baseUrl+"/flight/"+code);
  }
  findByRoute(source: string, destination:string ) {
    console.log('flightByRoute');
    return this.http.get<FlightModel[]>(this.baseUrl+"/flights/"+source+"/"+destination);
  }
}  
