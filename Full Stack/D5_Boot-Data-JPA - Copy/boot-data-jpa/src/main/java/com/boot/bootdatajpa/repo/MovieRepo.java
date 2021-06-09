package com.boot.bootdatajpa.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.boot.bootdatajpa.entity.Movie;

public interface MovieRepo extends JpaRepository<Movie,Integer> {

}
