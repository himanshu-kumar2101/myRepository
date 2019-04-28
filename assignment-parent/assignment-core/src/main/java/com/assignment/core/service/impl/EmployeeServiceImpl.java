package com.assignment.core.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.assignment.core.service.DepartmentService;
import com.assignment.core.service.EmployeeService;
import com.assignment.core.vo.EmployeeVO;
import com.assignment.dao.EmployeeDao;
import com.assignment.dao.entity.Department;
import com.assignment.dao.entity.Employee;

@Service
public class EmployeeServiceImpl implements EmployeeService{

	@Autowired
	private EmployeeDao employeeDao;
	
	@Autowired
	private DepartmentService departmentService;
	
	public void addEmployee(EmployeeVO employeeVO) {
		Employee employee = new Employee();
		employee.setFirstName(employeeVO.getFirstName());
		employee.setLastName(employeeVO.getLastName());
		employee.setGender(employeeVO.getGender());
		employee.setDateOfBirth(employeeVO.getDateOfBirth());
		
		Department department = departmentService.getDepartment(employeeVO.getDepartmentName());
		employee.setDepartment(department);
		employeeDao.createEmployee(employee);
	}

	public List<EmployeeVO> getEmployees() {
		List<Employee> employees = employeeDao.getEmployees();
		for(Employee employee : employees){
			EmployeeVO employeeVO = new EmployeeVO();
			employeeVO.setFirstName(employee.getFirstName());
			employeeVO.setLastName(employee.getLastName());
			employeeVO.setGender(employee.getGender());
			employeeVO.setDateOfBirth(employee.getDateOfBirth());
			employeeVO.setDepartmentName(employee.getDepartment().getDepartmentName());
		}
		return null;
	}

}
