package com.rfxcel.em.server;

public class LoginRequest {
    private final String userid;
    private final String password;
    
	public LoginRequest(String userid, String password) {
		this.userid = userid;
		this.password = password;
	}

	public String getUserid() {
		return userid;
	}

	public String getPassword() {
		return password;
	}
}