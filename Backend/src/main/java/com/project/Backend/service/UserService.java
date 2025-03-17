package com.project.Backend.service;



import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.project.Backend.model.User;
import com.project.Backend.repository.UserRepository;


@Service
public class UserService {
 
	@Autowired
	private UserRepository repo;
	
	@Autowired
	private BCryptPasswordEncoder passwordEncoder;

	    public String registerUser(User user) {
	    	if (repo.findByEmail(user.getEmail()) != null) {
	            return "Email already exists!";
	        }
	        if (repo.findByUsername(user.getUsername()) != null) {
	            return "Username already taken!";
	        }

	        user.setPassword(passwordEncoder.encode(user.getPassword()));
	        repo.save(user);
	        return "User registered successfully!";
	    }

	    // **Login**
	    public String loginUser(String username, String password) {
	        User user = repo.findByUsername(username);
	        if (user == null) {
	            return "User not found!";
	        }
	        if (!passwordEncoder.matches(password, user.getPassword())) {
	            return "Invalid credentials!";
	        }
	        return "Login successful!";
	    }

	    // **Forgot Password**
	    public String forgotPasswordUser(String email) {
	        User user = repo.findByEmail(email);
	        if (user == null) {
	            return "Email not registered!";
	        }
	        // Logic for sending reset link (mock)
	        return "Password reset link sent to your email!";
	    }
	
	public User findByEmail(String email) {
        return repo.findByEmail(email);
    }
	
	
}
