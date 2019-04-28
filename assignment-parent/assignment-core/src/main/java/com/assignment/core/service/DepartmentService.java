package com.assignment.core.service;

import java.util.List;

import com.assignment.core.vo.DepartmentVO;
import com.assignment.dao.entity.Department;

public interface DepartmentService {

	public Department getDepartment(String departmentName);
	
	public List<DepartmentVO> getAllDepartments();
}
