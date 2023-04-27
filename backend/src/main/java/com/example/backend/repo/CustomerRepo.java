package com.example.backend.repo;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.backend.model.Customer;

public interface CustomerRepo extends MongoRepository<Customer, String>{
  List<Customer> findByEmail(String email);

}
