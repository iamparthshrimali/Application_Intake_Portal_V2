package com.example.backend.services;



import com.example.backend.model.User;

public interface UserService {
	public User register(User user);
	public String login(User user);
	
}
