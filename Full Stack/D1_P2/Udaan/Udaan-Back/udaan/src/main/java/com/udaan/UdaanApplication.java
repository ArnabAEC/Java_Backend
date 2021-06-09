package com.udaan;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan("com.udaan")
@ComponentScan("com.udaan.entity")
@ComponentScan("com.udaan.repo")
@ComponentScan("com.udaan.rest")
@ComponentScan("com.udaan.service")
public class UdaanApplication {

	public static void main(String[] args) {
		SpringApplication.run(UdaanApplication.class, args);
	}

}
