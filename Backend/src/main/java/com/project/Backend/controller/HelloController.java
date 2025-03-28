package com.project.Backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpServletRequest;

@RestController
public class HelloController {

	@GetMapping("/hello")
	public String greet(HttpServletRequest request) {
		return "Hello Nikhil ";
	}
	
	@GetMapping("/about")
	public String aboutPage(HttpServletRequest request) {
		return "Study " + request.getSession().getId();
	}
}
