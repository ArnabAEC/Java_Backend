package com.example.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "demo_seller")
@SequenceGenerator(name="demoseq", sequenceName = "seq_demo", initialValue = 10)
public class Seller {

	@Id
	@GeneratedValue
	int sellerId;
	
	@Column(length = 50)
	String name;
	
	@Column(length = 50)
	String location;
	
	
	
	
}
