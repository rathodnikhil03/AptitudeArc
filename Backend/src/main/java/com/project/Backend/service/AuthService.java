package com.project.Backend.service;




import lombok.RequiredArgsConstructor;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.project.Backend.dto.LoginRequest;
import com.project.Backend.dto.RegisterRequest;
import com.project.Backend.model.Role;
import com.project.Backend.model.User;
import com.project.Backend.repository.UserRepository;

@Service
@RequiredArgsConstructor
public class AuthService {

	@Autowired
    private  UserRepository userRepository;
	
	@Autowired
    private  PasswordEncoder passwordEncoder;
	
	@Autowired
    private  JwtService jwtService;

	public String register(RegisterRequest request) {
	    // Check if the username exists
	    if (userRepository.findByUsername(request.getUsername()) != null) {
	        throw new RuntimeException("Username already taken!");
	    }

	    // Check if the email exists
	    if (userRepository.findByEmail(request.getEmail()) != null) {
	        throw new RuntimeException("Email already registered!");
	    }

	    // Create and save user with default role USER
	    User user = new User();
	    user.setUsername(request.getUsername());
	    user.setEmail(request.getEmail());
	    user.setPassword(passwordEncoder.encode(request.getPassword()));
	    user.setRole(Role.USER); // Default role assigned here

	    userRepository.save(user);
	    return "User registered successfully!";
	}



	public Map<String, String> login(LoginRequest request) {
	    User user = userRepository.findByUsername(request.getUsername());
	    if (user == null) {
	        throw new RuntimeException("User not found");
	    }

	    if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
	        throw new RuntimeException("Invalid password");
	    }

	    String token = jwtService.generateToken(user.getUsername());

	    Map<String, String> response = new HashMap<>();
	    response.put("token", token);
	    response.put("role", user.getRole().name()); // Return role in response

	    return response;
	}

}

