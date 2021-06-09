package com.boot.bootdatajpa.test;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import com.boot.bootdatajpa.entity.Department;
import com.boot.bootdatajpa.entity.Employee;
import com.boot.bootdatajpa.service.EmpDeptService;

public class TestEmpDept {

	private EmpDeptService service;
	
	@BeforeAll
	public void init() {
		service = new EmpDeptService();
	}
	
	@Test
	public void testSaveEmp() {
		Employee emp = new Employee();
		emp.setEmpName("Polo");
		emp.setSalary(50000.00);
		int empNo = service.saveEmp(emp, 10);
		System.out.println("Employee saved with id: "+empNo);
		
	}
	
	@Test
	public void testSaveDept() {
		Department dept = new Department();
		dept.setDeptNo(10);
		dept.setDeptName("Sales");
		int deptNo = service.saveDept(dept);
		System.out.println("Department saved with No: "+deptNo);
	}
	
}
