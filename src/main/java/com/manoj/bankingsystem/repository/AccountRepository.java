package com.manoj.bankingsystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.manoj.bankingsystem.model.Account;

public interface AccountRepository extends JpaRepository<Account, Long> {

}
