package com.boot.bootdatajpa.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.boot.bootdatajpa.entity.Employee;

public interface EmployeeRepo extends JpaRepository<Employee, Integer>{

}
