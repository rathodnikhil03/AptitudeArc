package com.project.Backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.project.Backend.model.User;
import com.project.Backend.repository.UserRepository;

import java.util.Optional;

@Service
public class ForgotPasswordService {
    @Autowired
    private UserRepository repo;

    @Autowired
    private JavaMailSender mailSender;

    public String sendResetLink(String email) {
        User user = repo.findByEmail(email);
        if (user.isEmpty()) return "Email not registered.";

        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(email);
        message.setSubject("Password Reset Link");
        message.setText("Click here to reset your password: http://localhost:3000/reset-password?email=" + email);
        mailSender.send(message);

        return "Reset link sent!";
    }
}

