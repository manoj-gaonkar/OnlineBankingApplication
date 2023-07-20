package com.manoj.bankingsystem.Service;

import java.util.List;

import com.manoj.bankingsystem.dao.loginDao;
import com.manoj.bankingsystem.model.User;

public interface UserService {
	
	public User saveUser(User user);
	public User registerUser(User user);
	public String authenticate(loginDao loginDao);
	public List<User> getAllUsers();

}
