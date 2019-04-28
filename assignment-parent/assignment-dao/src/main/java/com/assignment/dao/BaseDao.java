package com.assignment.dao;

import org.hibernate.Session;
import org.hibernate.SessionFactory;

public interface BaseDao {
	
	public Session getSession();
}
