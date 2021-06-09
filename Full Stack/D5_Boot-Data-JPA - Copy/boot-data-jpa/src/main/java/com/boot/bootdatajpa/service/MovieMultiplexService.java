package com.boot.bootdatajpa.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.boot.bootdatajpa.entity.Movie;
import com.boot.bootdatajpa.entity.Multiplex;
import com.boot.bootdatajpa.repo.MovieRepo;
import com.boot.bootdatajpa.repo.MultiplexRepo;

@Service
public class MovieMultiplexService {
	
	@Autowired
	private MovieRepo movRepo;
	
	@Autowired
	private MultiplexRepo mulRepo;
	
	public int saveMovie(Movie movie) {
		System.out.println("In saveMovie Service , movie : "+movie);
		movRepo.save(movie);
		return movie.getMovId();
	}
	
	public int saveMultiplex(Multiplex multiplex) {
		mulRepo.save(multiplex);
		return multiplex.getMpexId();
	}
	public boolean addMovieToMultiplex(int movId, int mpexId) {
		Movie movie = getMov(movId);
		Multiplex mpex = getMpex(mpexId);
		
		mpex.getMovies().add(movie);
		System.out.println(mpex);
		mulRepo.save(mpex);
		return true;
	}
	public List<Movie> getAllMovies() {
		return movRepo.findAll();
	}
	
	public Movie getMov(int movId) {
		return movRepo.findById(movId).get();
	}
	public Multiplex getMpex(int mpexId) {
		// TODO Auto-generated method stub
		return mulRepo.findById(mpexId).get();
	}
}
