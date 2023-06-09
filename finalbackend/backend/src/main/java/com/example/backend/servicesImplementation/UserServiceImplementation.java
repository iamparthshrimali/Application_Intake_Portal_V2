package com.example.backend.servicesImplementation;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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
		System.out.println(user);
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

	@Override
	public String deleteByUserName(String username) {
		// TODO Auto-generated method stub
		ur.deleteByUsername(username);
		return "User Deleted Successfully";
	}
	@Override
	public List<User> getAllUsers() {
		// TODO Auto-generated method stub
		
		return ur.findAll();
	}
	

}
