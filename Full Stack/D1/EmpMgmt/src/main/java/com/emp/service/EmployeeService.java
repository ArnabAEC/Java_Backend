package com.emp.service;

import java.util.List;
import java.util.Optional;

import com.emp.entity.Employee;

public interface EmployeeService {
	
	void addEmployee(Employee employee);
	
	Optional<Employee> getByEmpno(int empno);
	
	List<Employee> getAllEmployees();
	


	void removeEmployee(int empno);





	List<Employee> getByEmpName(String empName);

	boolean updateEmployee(int id, Employee employee);
}
