package com.mercury.MSIRoomBooking.controllers;

import com.mercury.MSIRoomBooking.beans.Room;
import com.mercury.MSIRoomBooking.services.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/rooms")
public class RoomsController {

    @Autowired
    private RoomService roomService;

    @GetMapping
    public List<Room> getAll(){
        return roomService.getAll();
    }


}
