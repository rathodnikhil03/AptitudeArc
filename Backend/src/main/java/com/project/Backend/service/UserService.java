package com.project.Backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.Backend.model.User;
import com.project.Backend.repository.UserRepository;

@Service
public class UserService {

	@Autowired
    private  UserRepository userRepository;
	
	 public User getUserProfile(String username) {
	        // Fetch user directly
	        User user = userRepository.findByUsername(username);
	        if (user == null) {
	            throw new RuntimeException("User not found");
	        }
	        return user;
	    }
}
