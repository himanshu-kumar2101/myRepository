package com.assignment.dao;

import java.util.List;

import com.assignment.dao.entity.Department;

public interface DepartmentDao {

	public Department getDepartment(String departmentName);
	
	public List<Department> getAllDepartments();
}
