package com.mercury.MSIRoomBooking.controllers;

import com.mercury.MSIRoomBooking.beans.Facility;
import com.mercury.MSIRoomBooking.beans.InvitedList;
import com.mercury.MSIRoomBooking.beans.Reservation;
import com.mercury.MSIRoomBooking.beans.User;
import com.mercury.MSIRoomBooking.daos.InvitedListDao;
import com.mercury.MSIRoomBooking.services.InvitedListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping("/invitedLists")
public class InvitedListController {

    @Autowired
    private InvitedListService invitedListService;

    @PostMapping
    public void save(@RequestBody List<InvitedList> invitedList) {
        invitedListService.save(invitedList);
    }

    @PostMapping("/userInvitations")
    public List<InvitedList> getInvitations(@RequestBody User user){
        return invitedListService.getInvitationByUser( user );
    }

    @PostMapping("/updateInvitation")
    public InvitedList updateInvitation(@RequestBody InvitedList invitation){
        return  invitedListService.updateInvitation(invitation);
    }

    @PostMapping("/reservation")
    public List<InvitedList> getInvitedDetailByReservation(@RequestBody Reservation reservation){
        return invitedListService.getInvitedDetailByReservation( reservation );
    }
}
