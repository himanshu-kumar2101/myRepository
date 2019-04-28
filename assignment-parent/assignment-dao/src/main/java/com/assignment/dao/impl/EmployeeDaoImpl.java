package com.assignment.dao.impl;

import java.util.List;

import org.hibernate.Session;
import org.springframework.stereotype.Repository;

import com.assignment.dao.EmployeeDao;
import com.assignment.dao.entity.Employee;

@Repository
public class EmployeeDaoImpl extends BaseDaoImpl implements EmployeeDao {

	public void createEmployee(Employee employee) {
		Session session = getSession();
		session.persist(employee);
	}

	public List<Employee> getEmployees() {
		Session session = getSession();
		List<Employee> employees = session.createQuery("from employee").list();
		return employees;
	}

}
