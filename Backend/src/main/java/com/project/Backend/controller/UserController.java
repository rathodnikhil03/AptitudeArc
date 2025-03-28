package com.project.Backend.controller;




import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpServletRequest;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("user")
public class UserController {	
	
	
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	@GetMapping("/profile")
	public String greet(HttpServletRequest request) {
		return "Hello User ";
	}

}
