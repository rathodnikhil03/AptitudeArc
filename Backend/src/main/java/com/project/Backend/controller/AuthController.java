package com.project.Backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import com.project.Backend.model.User;
import com.project.Backend.service.JwtService;
import com.project.Backend.service.UserService;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/auth")
public class AuthController {
    @Autowired
    private UserService userService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtService jwtService;
    

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @PostMapping("/register")
    public Map<String, String> register(@RequestBody User user) {
        String message = userService.registerUser(user);
        Map<String, String> response = new HashMap<>();
        response.put("message", message);
        return response;
    }

    @PostMapping("/login")
    public String login(@RequestBody User user) {
		
    	Authentication  authentication = authenticationManager
    			.authenticate(new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword()));
    	
    	if(authentication.isAuthenticated()) 
    	      return jwtService.generateToken(user.getUsername());
    	else
    		return "Login Failed";
    }
    
  
}
