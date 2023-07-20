package com.manoj.bankingsystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.manoj.bankingsystem.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
	
	User findByUsername(String username);

}
