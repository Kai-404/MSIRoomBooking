package com.mercury.MSIRoomBooking.controllers;

import com.mercury.MSIRoomBooking.beans.Facility;
import com.mercury.MSIRoomBooking.beans.Role;
import com.mercury.MSIRoomBooking.beans.User;
import com.mercury.MSIRoomBooking.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/{id}")
    public User getById(@PathVariable int id) {
        return userService.getUserByID(id);
    }

    @GetMapping
    public List<User> getAll(){
        return userService.getUsers();
    }

    @PostMapping
    public void save(@RequestBody User user) {
        userService.save(user);
    }

}
