package com.manoj.bankingsystem.model;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.SequenceGenerator;

@Entity
public class Account {
	

	@Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "account_number_generator")
    @SequenceGenerator(name = "account_number_generator", sequenceName = "account_number_seq", initialValue = (int) 100000000000L, allocationSize = 1)
    private int accountNumber;

    private double balance;
    
    @OneToOne(mappedBy = "account")
    @JsonIgnore
    private User user;

    
    public Account() {
    	super();
    }
    
	public Account(User user) {
		super();
		this.user = user;
		this.balance = 0;
	}


	public int getAccountNumber() {
		return accountNumber;
	}

	public void setAccountNumber(int accountNumber) {
		this.accountNumber = accountNumber;
	}

	public double getBalance() {
		return balance;
	}

	public void setBalance(double balance) {
		this.balance = balance;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	


	@Override
	public String toString() {
		return "Account [accountNumber=" + accountNumber + ", balance=" + balance + ", user=" + user + "]";
	}
    
    

}
