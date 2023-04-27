package com.example.backend.model;

import org.springframework.data.mongodb.core.mapping.Document;
import org.bson.types.Binary;
import org.springframework.stereotype.Component;


import jakarta.persistence.Id;
import jakarta.persistence.Transient;


@Document
@Component
public class CustomerForApprovement {
	@Id
	private String email;
	private String fname;
	private String lname;
	private String address;
	private String city;
	private String state;
	@Transient
	private Binary pdf;
	
	public CustomerForApprovement() {
		super();
	}
	public CustomerForApprovement(String email, String fname, String lname, String address, String city, String state,
			Binary pdf) {
		super();
		this.email = email;
		this.fname = fname;
		this.lname = lname;
		this.address = address;
		this.city = city;
		this.state = state;
		
		this.pdf = pdf;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getFname() {
		return fname;
	}
	public void setFname(String fname) {
		this.fname = fname;
	}
	public String getLname() {
		return lname;
	}
	public void setLname(String lname) {
		this.lname = lname;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public Binary getPdf() {
		return pdf;
	}
	public void setPdf(Binary pdf) {
		this.pdf = pdf;
	}
	@Override
	public String toString() {
		return "CustomerForApprovement [email=" + email + ", fname=" + fname + ", lname=" + lname + ", address="
				+ address + ", city=" + city + ", state=" + state + ", pdf=" + pdf + "]";
	}
	
	
	
	
	
	
	
}
