package com.boot.bootdatajpa.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.JoinColumn;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name= "jpa_mpex")
@SequenceGenerator(name="mulseq",sequenceName = "seq_mpex", initialValue = 1001)
public class Multiplex {
	@Id
	@GeneratedValue(generator = "mulseq", strategy = GenerationType.SEQUENCE)
	@Column(name = "mpex_id")
	private int mpexId;
	@Column(name = "mpex_name", length = 20)
	private String name;
	@Column(length = 20)
	private String city;
	
	//@JsonBackReference
	//@ManyToMany
	@ManyToMany(cascade = CascadeType.PERSIST)
	@JoinTable(name = "jpa_show", 
			joinColumns = {@JoinColumn(name = "mpex_id", referencedColumnName = "mpex_id")},
			inverseJoinColumns = {@JoinColumn(name = "mov_id", referencedColumnName = "mov_id")}) 
	private List<Movie> movies = new ArrayList<Movie>();	
	
	public List<Movie> getMovies() {
		return movies;
	}
	public void setMovies(List<Movie> movies) {
		this.movies = movies;
	}
	@Override
	public String toString() {
		return "Multiplex [mpexId=" + mpexId + ", name=" + name + ", city=" + city + ", movies=" + movies + "]";
	}
	public int getMpexId() {
		return mpexId;
	}
	public void setMpexId(int mpexId) {
		this.mpexId = mpexId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
}
