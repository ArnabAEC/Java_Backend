package com.udaan.rest;

import java.util.List;
import java.util.Optional;

import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.udaan.entity.Flight;
import com.udaan.service.FlightService;


@RestController
@RequestMapping("")
@CrossOrigin(origins= "*")

public class udaanController {


	@Autowired
	private FlightService flightService;
	
	@PostMapping(value = "/add", consumes = "application/json")
	public void addFlight(@RequestBody Flight flight) {
		flightService.addFlight(flight);
	}
	

	
	@GetMapping(value = "/flight/{code}", produces = "application/json" )
	public Optional<Flight> getFlight(@PathVariable("code") int code ) {
		System.out.println(code);
		return flightService.getByCode(code);
	}
	
	@GetMapping(value = "/flights", produces = "application/json")
	public List<Flight> getAllFlights(){
		return flightService.getAllFlights();
	}
	
	@GetMapping(value = "/flights/{source}/{destination}", produces = "application/json")
	public List<Flight> getByRoute(@PathVariable("source") String source,@PathVariable("destination") String destination){
		return flightService.getByRoute(source, destination);
	}
	
	@GetMapping(value ="/flights/{carrier}", produces= " application/json")
	public List<Flight> getByCarrier(@PathVariable("carrier") String carrier){
		return flightService.getByCarrier(carrier);
	}
	
	@DeleteMapping(value = "/del/{code}")
	public void deleteFlight(@PathVariable("code") int code) {
		System.out.println("Delete Controller : code "+code);
		flightService.removeFlight(code);
	}
	
	@PutMapping(path="/edit/{id}", consumes = "application/json")
	public boolean updateEmployee(@RequestBody Flight flight, @PathVariable("id") int id) {
		System.out.print("edit----------");
		return flightService.updateEmployee(id, flight);
	}
}
