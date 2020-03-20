package com.mercury.MSIRoomBooking.controllers;


import com.mercury.MSIRoomBooking.beans.Reservation;
import com.mercury.MSIRoomBooking.beans.Room;
import com.mercury.MSIRoomBooking.services.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/reservations")
public class ReservationController {

    @Autowired
    private ReservationService reservationService;

    @GetMapping
    public List<Reservation> getAll(){
        return reservationService.getAll();
    }

    @PostMapping
    public Reservation save(@RequestBody Reservation reservation) {
        System.out.println("Saving: " + reservation);
        return reservationService.save(reservation);
    }

    @GetMapping("/user/{userId}")
    public List<Reservation> getUserReservations(@PathVariable int userId) {
        return reservationService.getUserReservations(userId);
    }
}
