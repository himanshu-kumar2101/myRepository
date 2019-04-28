package com.assignment.dao.impl;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.springframework.stereotype.Repository;

import com.assignment.dao.DepartmentDao;
import com.assignment.dao.entity.Department;

@Repository
public class DepartmentDaoImpl extends BaseDaoImpl implements DepartmentDao {

	public Department getDepartment(String departmentName) {
		Session session = getSession();
		String hql = "FROM Department D WHERE D.departmentName = :departmentName";
		Query query = session.createQuery(hql);
		query.setParameter("department_name", departmentName);
		return (Department) query.list().get(0);
	}

	public List<Department> getAllDepartments() {
		Session session = getSession();
		List<Department> departments = session.createQuery("from department").list();
		return departments;
	}
}
