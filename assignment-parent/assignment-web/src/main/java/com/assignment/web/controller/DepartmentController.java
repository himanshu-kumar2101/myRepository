package com.assignment.web.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.assignment.core.service.DepartmentService;
import com.assignment.core.vo.DepartmentVO;

@RestController
public class DepartmentController {

	@Autowired
	private DepartmentService departmentService;
	
	@RequestMapping(value = "/viewDepartments", produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.GET)
	public List<DepartmentVO> getDepartments(){
		List<DepartmentVO> departments = departmentService.getAllDepartments();
		return departments;
	}
}
