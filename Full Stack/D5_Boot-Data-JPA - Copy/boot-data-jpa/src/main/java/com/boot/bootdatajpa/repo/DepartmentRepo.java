package com.boot.bootdatajpa.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.boot.bootdatajpa.entity.Department;

public interface DepartmentRepo extends JpaRepository<Department,Integer> {

}
