package com.boot.bootdatajpa.entity;

import java.util.Date;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name = "jpa_mov")
@SequenceGenerator(name="movseq", sequenceName = "seq_movie", initialValue = 101)
public class Movie {
	@Id
	@GeneratedValue(generator = "movseq", strategy = GenerationType.SEQUENCE)
	@Column(name = "mov_id")
	private int movId;
	@Column(length = 30)
	private String title;
	@Temporal(TemporalType.DATE)
	private Date released;
	
	@JsonBackReference
	//@ManyToMany
	@ManyToMany
	@JoinTable(name = "jpa_show",
		joinColumns = {@JoinColumn(name = " mov_id", referencedColumnName = "mov_id")},
		inverseJoinColumns = {@JoinColumn(name = "mpex_id", referencedColumnName = "mpex_id")})
	private List<Multiplex> multiplexes = new ArrayList<Multiplex>();

	public int getMovId() {
		return movId;
	}

	public void setMovId(int movId) {
		this.movId = movId;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Date getReleased() {
		return released;
	}

	public void setReleased(Date released) {
		this.released = released;
	}

	public List<Multiplex> getMultiplexes() {
		return multiplexes;
	}

	public void setMultiplexes(List<Multiplex> multiplexes) {
		this.multiplexes = multiplexes;
	}

	@Override
	public String toString() {
		return "Movie [movId=" + movId + ", title=" + title + ", released=" + released + ", multiplexes=" + multiplexes
				+ "]";
	} 
	
		
}
