package com.rfxcel.em.server;

public class LoginResponse {

    private final long token;
    private final String msg;
    
	public LoginResponse(long token, String msg) {
		this.token = token;
		this.msg = msg;
	}
	
	public long getToken() {
		return token;
	}
	
	public String getMsg() {
		return msg;
	}

}