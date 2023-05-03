package com.example.backend.services;



import java.util.List;

import com.example.backend.model.User;

public interface UserService {
	public User register(User user);
	public String login(User user);
	List<User> getAllUsers();
	String deleteByUserName(String username);
	
}
