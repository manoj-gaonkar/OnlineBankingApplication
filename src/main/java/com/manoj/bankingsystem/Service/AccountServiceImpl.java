package com.manoj.bankingsystem.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.manoj.bankingsystem.model.Account;
import com.manoj.bankingsystem.repository.AccountRepository;

@Service
public class AccountServiceImpl implements AccountService {
	
	@Autowired
	private AccountRepository accountRepository;

	@Override
	public Account saveAccount(Account account) {
		accountRepository.save(account);
		return null;
	}
	
	

}
