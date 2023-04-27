package com.example.backend.repo;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.backend.model.User;

@Repository
public interface UserRepo extends MongoRepository<User, String> {
	
	List<User> findByUsernameAndPassword(String username,String password);
	User findByUsername(String username);
	
	

}
