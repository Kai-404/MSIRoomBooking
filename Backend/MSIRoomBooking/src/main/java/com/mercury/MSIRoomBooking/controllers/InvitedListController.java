package com.mercury.MSIRoomBooking.controllers;

import com.mercury.MSIRoomBooking.beans.Facility;
import com.mercury.MSIRoomBooking.beans.InvitedList;
import com.mercury.MSIRoomBooking.daos.InvitedListDao;
import com.mercury.MSIRoomBooking.services.InvitedListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import java.util.List;

@RestController
@RequestMapping("/invitedLists")
public class InvitedListController {

    @Autowired
    private InvitedListService invitedListService;

    @PostMapping
    public void save(@RequestBody List<InvitedList> invitedList) {
        System.out.println( "HelloWorld" );
        invitedListService.save(invitedList);
    }
}
