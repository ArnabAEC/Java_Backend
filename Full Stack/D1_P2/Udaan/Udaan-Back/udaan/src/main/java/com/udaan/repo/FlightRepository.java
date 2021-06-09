package com.udaan.repo;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.udaan.entity.Flight;

/**
 * 
 * @author Arnab
 *
 */
public interface FlightRepository extends JpaRepository<Flight, Integer> {

	List<Flight> findByCarrier(String Carrier);
	
	@Query("FROM Flight WHERE source=:src AND destination=:dest")
	List<Flight> findByRoute(@Param("src") String source, @Param("dest") String destination );
	
}
