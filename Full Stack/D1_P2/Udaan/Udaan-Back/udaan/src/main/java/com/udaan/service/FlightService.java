package com.udaan.service;

import java.util.List;
import java.util.Optional;

import com.udaan.entity.Flight;

public interface FlightService {

	void addFlight(Flight flight);
	
	Optional<Flight> getByCode(int code);
	
	List<Flight> getAllFlights();
	
	List<Flight> getByRoute(String source, String destination);
	
	List<Flight> getByCarrier(String carrier);

	void removeFlight(int code);

	boolean updateEmployee(int id, Flight flight);
}
