package com.boot.bootdatajpa.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.boot.bootdatajpa.entity.Movie;
import com.boot.bootdatajpa.entity.Multiplex;
import com.boot.bootdatajpa.service.MovieMultiplexService;

@CrossOrigin
@RestController
class MovMpexController {

	@Autowired
	MovieMultiplexService service;
	
	@PostMapping(value = "/movie", consumes = "application/json")
	public int saveMovie(@RequestBody Movie movie) {
		
		return service.saveMovie(movie);
	}
	
	@PostMapping(value = "/multiplex", consumes = "application/json")
	public int saveMultiplex(@RequestBody Multiplex multiplex) {
		return service.saveMultiplex(multiplex);
	}
	
	@PutMapping(value = "/show/{movId}/{mpexId}")
	public boolean setMovieInMultiplex(@PathVariable("movId") int movId, @PathVariable("mpexId") int mpexId) {
		return service.addMovieToMultiplex(movId, mpexId);
	}
	@GetMapping(value = "/movies")
	public List<Movie> getAllMovies(){
		return service.getAllMovies();
	}
	@GetMapping(value = "/movie/{id}", produces = "application/json")
	public Movie getMovById(@PathVariable("id") int movId) {
		return service.getMov(movId);
	}
	
	@GetMapping(value = "/multiplex/{id}", produces = "application/json")
	public Multiplex getMpexById(@PathVariable("id") int mpexId) {
		return service.getMpex(mpexId);
	}
}
