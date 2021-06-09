package com.boot.bootdatajpa.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.boot.bootdatajpa.entity.Department;
import com.boot.bootdatajpa.entity.Employee;
import com.boot.bootdatajpa.service.EmpDeptService;

@RestController
@CrossOrigin
public class EmpDeptController {
	
	@Autowired
	private EmpDeptService service;
	
	@PostMapping(value = "/emp/{dno}", consumes="application/json")
	public int saveEmp(@RequestBody Employee emp,@PathVariable("dno") int deptNo) {
		System.out.println("In Emp Add Controller: Emp = "+emp+" Dept No: "+deptNo);
		return service.saveEmp(emp, deptNo);
	}
	
	@PostMapping(value = "/dept/add", consumes="application/json")
	public int saveDept(@RequestBody Department dept) {
		System.out.println("In Dept Add Controller: Dept = "+dept);

		return service.saveDept(dept);
	}
	
	@GetMapping(value = "/emp/{eno}", produces = "application/json")
	public Employee getEmp(@PathVariable("eno") int empNo ) {
		return service.getEmp(empNo);
	}
	
	@GetMapping(value = "/dept/{dno}", produces = "application/json")
	public Department getDept(@PathVariable("dno") int deptNo ) {
		return service.getDept(deptNo);
	}
	
}
