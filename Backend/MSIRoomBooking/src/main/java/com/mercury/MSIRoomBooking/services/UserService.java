package com.mercury.MSIRoomBooking.services;

import com.mercury.MSIRoomBooking.beans.Facility;
import com.mercury.MSIRoomBooking.beans.Role;
import com.mercury.MSIRoomBooking.beans.User;
import com.mercury.MSIRoomBooking.daos.UserDao;
import com.mercury.MSIRoomBooking.http.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserDao userDao;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public User getUserByID(Integer id){
        return userDao.findById( id ).get();
    }

    public Response save(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        Role role = new Role( 1 );
        user.setRole(role);
        userDao.save(user);

        return new Response(true);
    }

}
