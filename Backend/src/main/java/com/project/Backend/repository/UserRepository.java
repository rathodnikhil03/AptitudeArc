package com.project.Backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.Backend.model.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
    User findByEmail(String email);
}

