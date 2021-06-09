package com.boot.bootdatajpa.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boot.bootdatajpa.entity.Department;
import com.boot.bootdatajpa.entity.Employee;
import com.boot.bootdatajpa.repo.DepartmentRepo;
import com.boot.bootdatajpa.repo.EmployeeRepo;

@Service
public class EmpDeptService {

	@Autowired
	private EmployeeRepo empRepo;
	@Autowired
	private DepartmentRepo deptRepo;
	
	public int saveEmp(Employee emp, int deptNo) {
		Department dept = getDept(deptNo);
		emp.setDept(dept);
		empRepo.save(emp);
		return emp.getEmpno();
		
	}
	
	public int saveDept(Department dept) {
		deptRepo.save(dept);
		return dept.getDeptNo();
		
	}
	
	public Employee getEmp(int empNo) {
		return empRepo.findById(empNo).get();	}
	
	public Department getDept(int deptNo) {
		return deptRepo.findById(deptNo).get();
		
	}
	
}
