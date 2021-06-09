package com.emp.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
/**
 * 
 * @author Arnab
 *
 */
@Entity
@Table(name="employee_master")
public class Employee {

	@Id
	public int empno;
	@Override
	public String toString() {
		return "Employee [empno=" + empno + ", empName=" + empName + ", job=" + job + ", salary=" + salary + "]";
	}
	@Column(length=20)
	public String empName;
	@Column(length=20)
	public String job;
	public int salary;
	
	
	public int getEmpno() {
		return empno;
	}
	public void setEmpno(int empno) {
		this.empno = empno;
	}
	public String getEmpName() {
		return empName;
	}
	public void setEmpName(String empName) {
		this.empName = empName;
	}
	public String getJob() {
		return job;
	}
	public void setJob(String job) {
		this.job = job;
	}
	public int getSalary() {
		return salary;
	}
	public void setSalary(int salary) {
		this.salary = salary;
	}
}
