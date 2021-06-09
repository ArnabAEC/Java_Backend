package com.emp.rest;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.emp.entity.Employee;
import com.emp.service.EmployeeService;

@CrossOrigin
@RestController
public class EmployeeController {
	
	@Autowired
	private EmployeeService service;
	
	@PostMapping(path = "/add", consumes="application/json")
	public void addEmp(@RequestBody Employee employee) {
		System.out.println("EMP: "+employee.toString());
		service.addEmployee(employee);
	}
	
	@GetMapping(path="/employees" , produces="application/json")
	public List<Employee> showList() {
		return service.getAllEmployees();
	}
	
	@GetMapping(path="/employee/id/{empno}", produces="application/json")
	public Optional<Employee> getByEmpno(@PathVariable("empno") int empno) {
		return service.getByEmpno(empno);
	}
	
	@GetMapping(path="/employees/name/{empName}", produces="application/json")
	public List<Employee> getByEmpName(@PathVariable("empName") String empName){
		return service.getByEmpName(empName);
	}
	
	@DeleteMapping(path="/del/{id}", produces = "application/json")
	public List<Employee> delEmp(@PathVariable("id") int empno){
		service.removeEmployee(empno);
		return service.getAllEmployees();
	}
	
	@PutMapping(path="/edit/{id}", consumes = "application/json")
	public boolean updateEmployee(@RequestBody Employee employee, @PathVariable("id") int id) {
		System.out.print("edit----------");
		return service.updateEmployee(id, employee);
	}
}
