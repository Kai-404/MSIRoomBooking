package com.mercury.MSIRoomBooking.security.handlers;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.mercury.MSIRoomBooking.security.SecurityUtils;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.logout.LogoutSuccessHandler;
import org.springframework.stereotype.Component;


@Component
public class LogoutSuccessHandlerImpl implements LogoutSuccessHandler {

    @Override
    public void onLogoutSuccess(HttpServletRequest request, HttpServletResponse response, Authentication arg2)
            throws IOException, ServletException {
        SecurityUtils.sendResponse(response, HttpServletResponse.SC_OK, "Logout successfully.", null);
    }

}