package com.mercury.MSIRoomBooking.services;

import com.mercury.MSIRoomBooking.daos.UserDao;
import com.mercury.MSIRoomBooking.http.AuthenticationSuccessResponse;
import com.mercury.MSIRoomBooking.http.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;


@Service
public class AuthService {
	
	@Autowired
	private UserDao userDao;
	
	//@GetMapping("/checklogin")
	public Response checklogin(Authentication authentication) {
		if (authentication != null) {
			Response response = new AuthenticationSuccessResponse(true, 200, "Logged In!", userDao.findByEmail(authentication.getName()));
			return response;
		} else {
			return new Response(false);
		}
	}

}
