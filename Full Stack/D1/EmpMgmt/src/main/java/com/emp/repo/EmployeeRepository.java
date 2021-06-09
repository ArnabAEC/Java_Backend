package com.emp.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.emp.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
	
	
	@Query("FROM Employee WHERE name=:name")
	List<Employee> findByName(@Param("name") String name);

	List<Employee> findByEmpName(String empName);
}
