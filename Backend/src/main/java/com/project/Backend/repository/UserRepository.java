package com.project.Backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.Backend.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer>{

}
