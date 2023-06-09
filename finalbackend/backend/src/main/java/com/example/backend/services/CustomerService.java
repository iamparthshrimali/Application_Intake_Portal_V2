package com.example.backend.services;


import java.io.IOException;
import java.io.InputStream;
import java.util.Base64;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.bson.types.Binary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.backend.model.Customer;
import com.example.backend.model.CustomerForApprovement;
import com.example.backend.repo.CustomerForApprovementRepo;
import com.example.backend.repo.CustomerRepo;

public interface CustomerService {

	public ResponseEntity<InputStreamResource> downloadFile(@RequestParam String username) throws IOException;
	public Map<String, String> validateCustomer(@RequestBody Map<String, Object> requestParams);
	public Map<String, String> registerCustomer(@RequestBody Map<String, Object> requestParams);
	public List<Customer> getCustomerList();
	public  void addCustomer(Customer customer);
	void deleteCustomer(String email);
	List<Customer> getCustomerForApprovement();
	
//	void updateCustomer(Customer customer);
}