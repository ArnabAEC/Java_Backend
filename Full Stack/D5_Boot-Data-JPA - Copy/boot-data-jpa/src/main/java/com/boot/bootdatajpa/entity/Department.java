package com.boot.bootdatajpa.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name="jpa_dept")
public class Department {

	@Id
	@Column(name="jpa_dept")
	private int deptNo;
	@Column(name="dname",length=15)
	private String deptName;
	
	@JsonManagedReference
	@OneToMany(mappedBy="dept")
	private List<Employee> emps = new ArrayList<Employee>();


	@Override
	public String toString() {
		return "Department [deptNo=" + deptNo + ", deptName=" + deptName + ", emps=" + emps + "]";
	}


	public int getDeptNo() {
		return deptNo;
	}


	public void setDeptNo(int deptNo) {
		this.deptNo = deptNo;
	}


	public String getDeptName() {
		return deptName;
	}


	public void setDeptName(String deptName) {
		this.deptName = deptName;
	}


	public List<Employee> getEmps() {
		return emps;
	}


	public void setEmps(List<Employee> emps) {
		this.emps = emps;
	}
	

	
}
