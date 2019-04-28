package com.assignment.dao.impl;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.assignment.dao.BaseDao;

@Repository
public class BaseDaoImpl implements BaseDao{

	@Autowired 
	private SessionFactory sessionFactory;

	public Session getSession() {
		return sessionFactory.openSession();
	}
}
