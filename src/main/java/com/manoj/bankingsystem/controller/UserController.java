package com.manoj.bankingsystem.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.manoj.bankingsystem.Service.UserService;
import com.manoj.bankingsystem.model.User;
import com.manoj.bankingsystem.repository.UserRepository;
import com.manoj.bankingsystem.dao.loginDao;

@RestController
@RequestMapping("/api/v1.0/bank")
public class UserController {
	
	@Autowired
	private UserService userService;
	@Autowired
	private UserRepository userRepository;
	@PostMapping("createaccount")
	@CrossOrigin(origins = "http://localhost:4200")
	public User registerUser(@RequestBody User user) {
		System.out.println(user.getEmail());
		return userService.registerUser(user);
	}
	
	@PostMapping("login")
	@CrossOrigin(origins = "http://localhost:4200")
	public ResponseEntity<?> loginUser(@RequestBody loginDao loginDetails) {
		System.out.println("username : "+loginDetails.username+" password : "+loginDetails.password);
		System.out.println(userService.authenticate(loginDetails));
		if(userService.authenticate(loginDetails)=="success") {
			System.out.println("sucess");
			return ResponseEntity.ok(userRepository.findByUsername(loginDetails.username));
		}else {
			if(userService.authenticate(loginDetails)=="wp") {
				return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body("wrong password");
			}else if(userService.authenticate(loginDetails)=="une") {
				return ResponseEntity.status(HttpStatus.NOT_FOUND).body("user does not exist");
			}else {
				return ResponseEntity.status(HttpStatus.NOT_FOUND).body("not valid");
			}
			
		}
		
	}
	
	@GetMapping("allusers")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<User> getAllUsers(){
		return userService.getAllUsers();
	}

}
