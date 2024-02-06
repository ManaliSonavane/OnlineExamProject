package com.project.controller;

import java.util.HashMap;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.entity.User;
import com.project.entity.Answer;

@RestController
@CrossOrigin("http://localhost:4200")
public class LoginController {
    @Autowired
    SessionFactory factory;
    
	static HttpSession httpsession;
	
	@PostMapping("validate")
	public boolean validate(@RequestBody User userFromAngular, HttpServletRequest request) {
		Session session= factory.openSession();
		String usernameFromAngular= userFromAngular.username;
		
		User userFromDatabase= session.get(User.class, usernameFromAngular);
		
		//if userFromAngular is not present in database, it means username is wrong , we will get null value from get method

		if(userFromDatabase == null) {
			return false;
		}
		else {
			if(userFromDatabase.password.equals (userFromAngular.password) ) {
				//Session obj is given to user
				httpsession = request.getSession();
				
				httpsession.setAttribute("score", 0);
				httpsession.setAttribute("questionIndex", 0);
				
				HashMap<Integer,Answer> hashmap= new HashMap<Integer,Answer>();
				httpsession.setAttribute("submittedDetails", hashmap);
				
				return true;
			}
			else {
				return false;
			}
		}
	}
	
	@RequestMapping("saveUser")
	public void saveUser(@RequestBody User user)
	{
		Session session=factory.openSession();
		
		Transaction tx=session.beginTransaction();
			
			session.save(user);
		
		tx.commit();

		System.out.println("Data saved");
	}
}
