package com.assignment.core.service;

import java.util.List;

import com.assignment.core.vo.EmployeeVO;

public interface EmployeeService {

	public void addEmployee(EmployeeVO employeeVO);
	
	public List<EmployeeVO> getEmployees();
}
