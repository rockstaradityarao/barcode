package com.rfxcel.em.server;

import java.util.Date;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {
	private static long token;
	private final String myuserid = "admin";
	private final String mypassword = "1234";

    @CrossOrigin
    @RequestMapping("/login")
    public LoginResponse greeting(@RequestParam(value="userid") String userid, @RequestParam(value="password") String password) {
    	token = new Date().getTime();
    	if (userid.equals(myuserid) && mypassword.equals(mypassword)) {
        	System.out.println("login " + userid + ","  + password + " successful token = " + token);
            return new LoginResponse(token,"Login successful");
    	}
    	else {
        	System.out.println("login " + userid + ","  + password + " failed");
            return new LoginResponse(0L,"Login failed");
    	}
    }
}