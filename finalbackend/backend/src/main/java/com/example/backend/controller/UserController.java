package com.example.backend.controller;

import org.bson.BsonBinarySubType;
import org.bson.types.Binary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.BasicQuery;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.backend.model.Customer;
import com.example.backend.model.CustomerForApprovement;
import com.example.backend.model.User;
import com.example.backend.repo.CustomerForApprovementRepo;
import com.example.backend.repo.CustomerRepo;
import com.example.backend.repo.UserRepo;
import com.example.backend.servicesImplementation.UserServiceImplementation;

import ch.qos.logback.core.model.Model;

import org.springframework.http.MediaType;
import java.io.ByteArrayInputStream;
import java.io.DataOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;

import java.util.*;

@CrossOrigin
@RestController
public class UserController {

	@Autowired
	UserServiceImplementation userService;

	@GetMapping("/")
	public String home() {
		return "hello app";
	}

	@PostMapping("/register")
	public User register(@RequestBody User user) throws IOException {

		return userService.register(user);
	}

	@PostMapping("/delete")
	public String deleteByUsername(@RequestBody User user) {
        System.out.println(user);
		return userService.deleteByUserName(user.getUsername());
	}
	
	@PostMapping("/login")
	public String login(@RequestBody User user) {

		return userService.login(user);
	}	
	//new things
	@GetMapping("/getAllEmployees")
	public List<User> getEmployeeList() {

		return userService.getAllUsers();
	}	
}

