package com.udaan.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.udaan.entity.Flight;
import com.udaan.repo.FlightRepository;

@Service
public class serviceImplementation implements FlightService{

	@Autowired
	private FlightRepository repo;
	
	@Override
	public void addFlight(Flight flight) {
		// TODO Auto-generated method stub
		repo.save(flight);
	}

	@Override
	public Optional<Flight> getByCode(int code) {
		// TODO Auto-generated method stub
		return repo.findById(code);
}

	@Override
	public List<Flight> getAllFlights() {
		// TODO Auto-generated method stub
		return repo.findAll();
	}

	@Override
	public List<Flight> getByRoute(String source, String destination) {
		// TODO Auto-generated method stub
		System.out.println("Source::"+source+" Destination::"+destination);
		return repo.findByRoute(source, destination);
}

	@Override
	public List<Flight> getByCarrier(String carrier) {
		// TODO Auto-generated method stub
		return repo.findByCarrier(carrier);
	}

	@Override
	public void removeFlight(int code) {
		// TODO Auto-generated method stub
		repo.deleteById(code);
		
	}

	@Override
	public boolean updateEmployee(int id, Flight flight) {
		// TODO Auto-generated method stub
		Optional<Flight> flt = repo.findById(id);
		if(flt != null) {
			System.out.println("flight found for update");
			repo.save(flight);
			return true;
		}
		return false;
	}


	
}
