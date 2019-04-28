package com.assignment.web.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.assignment.core.service.EmployeeService;
import com.assignment.core.vo.EmployeeVO;

@RestController
public class EmployeeController {

	@Autowired
	private EmployeeService employeeService;
	
	@RequestMapping(value = "/viewEmployees", produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.GET)
	public List<EmployeeVO> getEmployees(){
		List<EmployeeVO> employees = employeeService.getEmployees();
		return employees;
	}
	
	@RequestMapping(value = "/addEmployee", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.POST)
	public String addEmployee(@RequestBody EmployeeVO employeeVO){
		employeeService.addEmployee(employeeVO);
		return "Employee added successfully";
	}
}
