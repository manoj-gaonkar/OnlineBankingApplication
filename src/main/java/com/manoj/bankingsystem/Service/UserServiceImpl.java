package com.manoj.bankingsystem.Service;

import java.util.List;

import org.hibernate.bytecode.internal.bytebuddy.PrivateAccessorException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.manoj.bankingsystem.dao.loginDao;
import com.manoj.bankingsystem.model.Account;
import com.manoj.bankingsystem.model.User;
import com.manoj.bankingsystem.repository.AccountRepository;
import com.manoj.bankingsystem.repository.UserRepository;


@Service
public class UserServiceImpl implements UserService {
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private AccountRepository accountRepository;
	
	public User saveUser(User user) {
		return userRepository.save(user);
	}
	
	public User registerUser(User user) {
		if (userRepository.findByUsername(user.getUsername()) != null) {
            throw new IllegalArgumentException("User with this username already exists.");
        }
		
		// Hash the password before saving to the database
        //String encodedPassword = passwordEncoder.encode(user.getPassword());
		//user.setPassword(encodedPassword);
		System.out.println(user.getEmail());

		Account account = new Account(user);
	    user.setAccount(account);
		User userret = userRepository.save(user);
		accountRepository.save(account);

		
		
		return userret;

	}
	
	public String authenticate(loginDao loginDao) {
		
		try {
		    User user = userRepository.findByUsername(loginDao.username);

		    if (user != null) {
		        if (user.getPassword().equals(loginDao.password)) {
		            return "success";
		        } else {
		        	//wp = "wrong password"		        	
		            return "wp";
		        }
		    } else {
		    	//une="user does not exist in data base"
		        return "une";
		    }
		} catch (Exception e) {
		    return "Error: " + e.toString();
		}

	}

	@Override
	public List<User> getAllUsers() {
		return userRepository.findAll();
	}

}
