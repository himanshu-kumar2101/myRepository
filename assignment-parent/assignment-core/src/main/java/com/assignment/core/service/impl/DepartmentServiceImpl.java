package com.assignment.core.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.assignment.core.service.DepartmentService;
import com.assignment.core.vo.DepartmentVO;
import com.assignment.dao.DepartmentDao;
import com.assignment.dao.entity.Department;

@Service
public class DepartmentServiceImpl implements DepartmentService {
	
	@Autowired
	private DepartmentDao departmentDao;

	public Department getDepartment(String departmentName) {
		return departmentDao.getDepartment(departmentName);
	}

	public List<DepartmentVO> getAllDepartments() {
		List<Department> departments = departmentDao.getAllDepartments();
		List<DepartmentVO> departmentVOs = new ArrayList<DepartmentVO>();
		for(Department department : departments){
			DepartmentVO departmentVO = new DepartmentVO();
			departmentVO.setDepartmentId(department.getDepartmentId());
			departmentVO.setDepartmentName(department.getDepartmentName());
			departmentVOs.add(departmentVO);
		}
		return departmentVOs;
	}	
}
