package com.example.backend.servicesImplementation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.model.User;
import com.example.backend.repo.UserRepo;
import com.example.backend.services.UserService;

@Service
public class UserServiceImplementation implements UserService {

	@Autowired
	UserRepo ur;

	@Autowired
	User user;

	@Override
	public User register(User user) {
		// TODO Auto-generated method stub
		return ur.save(user);
	}

	@Override
	public String login(User user) {
		// TODO Auto-generated method stub
		if (ur.findByUsernameAndPassword(user.getUsername(), user.getPassword()).size() > 0) {
			return "User Found";
		}
		return "User Not Found";
	}

}
