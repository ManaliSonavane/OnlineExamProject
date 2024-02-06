package com.project.entity;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class User {
	  @Id
      public String username;
      public String password;
      long mobno;
      String emailid;
    
      //{ "username":"x", "password":"y" }
	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public long getMobno() {
		return mobno;
	}

	public void setMobno(long mobno) {
		this.mobno = mobno;
	}

	public String getEmailid() {
		return emailid;
	}
	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}


	@Override
	public String toString() {
		return "User [username=" + username + ", password=" + password + ", mobno=" + mobno + ", email=" + emailid + "]";
	}
      
}
