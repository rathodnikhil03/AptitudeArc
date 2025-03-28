package com.project.Backend.controller;


import lombok.RequiredArgsConstructor;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import com.project.Backend.dto.RegisterRequest;
import com.project.Backend.model.User;
import com.project.Backend.repository.UserRepository;
import com.project.Backend.service.AuthService;
import com.project.Backend.service.JwtService;


@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {

	@Autowired
    private  AuthService authService;

	@Autowired
	AuthenticationManager authenticationManager;
	
	@Autowired
	private JwtService jwtService;
	
	@Autowired
    private  UserRepository userRepository;
	
    @PostMapping("register")
    public ResponseEntity<String> register(@RequestBody RegisterRequest request) {
        return ResponseEntity.ok(authService.register(request));
    }

    @PostMapping("login")
    public ResponseEntity<?> login(@RequestBody User user) {
        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword())
            );

            if (authentication.isAuthenticated()) {
                String token = jwtService.generateToken(user.getUsername());

                // Fetch user details including role
                User loggedInUser = userRepository.findByUsername(user.getUsername());

                // Return token and role
                Map<String, Object> response = new HashMap<>();
                response.put("token", token);
                response.put("role", loggedInUser.getRole().name());

                return ResponseEntity.ok(response);
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }

        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Login failed");
    }

    
    


}
