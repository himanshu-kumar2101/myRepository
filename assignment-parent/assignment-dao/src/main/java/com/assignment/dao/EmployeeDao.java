package com.assignment.dao;

import java.util.List;

import com.assignment.dao.entity.Employee;

public interface EmployeeDao {

	public void createEmployee(Employee employee);
	
	public List<Employee> getEmployees();
}
