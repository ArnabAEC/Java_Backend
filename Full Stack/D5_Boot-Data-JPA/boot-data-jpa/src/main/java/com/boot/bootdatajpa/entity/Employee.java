package com.boot.bootdatajpa.entity;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name="jpa_emp")
public class Employee {

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

	public double getSalary() {
		return salary;
	}

	public void setSalary(double salary) {
		this.salary = salary;
	}

	public Department getDept() {
		return dept;
	}

	public void setDept(Department dept) {
		this.dept = dept;
	}

	@Override
	public String toString() {
		return "Employee [empno=" + empno + ", empName=" + empName + ", salary=" + salary + ", dept=" + dept + "]";
	}

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="emp_no")
	private int empno;
	@Column(name="ename",length=30)
	private String empName;
	private double salary;
	
	@JsonBackReference
	@ManyToOne
	@JoinColumn(name="dept_no")
	private Department dept;

}
