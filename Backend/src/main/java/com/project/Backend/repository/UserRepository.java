package com.project.Backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.Backend.model.User;


public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
    User findByEmail(String email);
}

