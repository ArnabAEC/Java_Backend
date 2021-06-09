package com.emp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.emp.entity.Employee;
import com.emp.repo.EmployeeRepository;

@Service
public class EmployeeServiceImplementation implements EmployeeService{

	@Autowired
	private EmployeeRepository repo; 
	
	@Override
	public void addEmployee(Employee employee) {
		// TODO Auto-generated method stub
		repo.save(employee);
	}

	@Override
	public Optional<Employee> getByEmpno(int empno) {
		// TODO Auto-generated method stub
		return repo.findById(empno);
	}

	@Override
	public List<Employee> getAllEmployees() {
		// TODO Auto-generated method stub
		return repo.findAll();
	}

	@Override
	public void removeEmployee(int empno) {
		// TODO Auto-generated method stub
		repo.deleteById(empno);
	}


	@Override
	public List<Employee> getByEmpName(String empName) {
		// TODO Auto-generated method stub
		return repo.findByEmpName(empName);
	}

	@Override
	public boolean updateEmployee(int id, Employee employee) {
		// TODO Auto-generated method stub
		Optional<Employee> emp = repo.findById(id);
		if(emp != null) {
			repo.save(employee);
			return true;
		}
		return false;
	}


}
