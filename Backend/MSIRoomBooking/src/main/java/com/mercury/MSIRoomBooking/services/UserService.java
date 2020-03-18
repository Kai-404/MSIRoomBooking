package com.mercury.MSIRoomBooking.services;

import com.mercury.MSIRoomBooking.beans.Facility;
import com.mercury.MSIRoomBooking.beans.Role;
import com.mercury.MSIRoomBooking.beans.User;
import com.mercury.MSIRoomBooking.daos.UserDao;
import com.mercury.MSIRoomBooking.http.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserDao userDao;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public User getUserByID(Integer id){
        return userDao.findById( id ).get();
    }

    public List<User> getUsers(){
        return userDao.findAll();
    }

    public Response save(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        Role role = new Role( 1 );
        user.setRole(role);
        userDao.save(user);

        return new Response(true);
    }

    public List<User> getAllOtherUsers(int id){

        List<User> otherUsers = new ArrayList<>( );

        userDao.findAll().forEach( user -> {
            if (user.getId()!=id)
                otherUsers.add( user );
        } );

        return otherUsers;
    }

}
