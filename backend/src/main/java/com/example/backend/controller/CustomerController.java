package com.example.backend.controller;

import java.io.ByteArrayInputStream;
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
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.model.Customer;
import com.example.backend.model.CustomerForApprovement;
import com.example.backend.repo.CustomerForApprovementRepo;
import com.example.backend.repo.CustomerRepo;
import com.example.backend.servicesImplementation.CustomerServiceImplementation;

@CrossOrigin
@RestController
public class CustomerController {
	
   @Autowired
   CustomerServiceImplementation customerService;
	
	@RequestMapping("/retrieveFile")
	public ResponseEntity<InputStreamResource> downloadFile(@RequestParam String username) throws IOException {
			return customerService.downloadFile(username);
	}

	@RequestMapping("/validateCustomer")
	public Map<String, String> validateCustomer(@RequestBody Map<String, Object> requestParams) {
		return customerService.validateCustomer(requestParams);

	}

	@RequestMapping("/registerCustomer")
	public Map<String, String> registerCustomer(@RequestBody Map<String, Object> requestParams) {
		return customerService.registerCustomer(requestParams);
	}
	@RequestMapping("/getCustomersList")
	public List<Customer> getAllCustomers()
	{
		return customerService.getCustomerList();
	}

}
