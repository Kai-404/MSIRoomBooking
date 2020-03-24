package com.mercury.MSIRoomBooking.controllers;

import com.mercury.MSIRoomBooking.beans.Facility;
import com.mercury.MSIRoomBooking.beans.FacilityRequirementList;
import com.mercury.MSIRoomBooking.beans.Reservation;
import com.mercury.MSIRoomBooking.services.FacilityRequirementListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/facilityRequirementLists")
public class FacilityRequirementListController {

    @Autowired
    public FacilityRequirementListService facilityRequirementListService;

    @GetMapping
    public List<FacilityRequirementList> getAll(){
        return facilityRequirementListService.getAll();
    }


    @PostMapping
    public void save(@RequestBody List<FacilityRequirementList> facilityRequirementList) {
        System.out.println( "Saving: "+facilityRequirementList );
        facilityRequirementListService.save(facilityRequirementList);
    }

    @PostMapping("/reservation")
    public List<FacilityRequirementList> getFacilityDetailByReservation(@RequestBody Reservation reservation){
        return facilityRequirementListService.getFacilityDetailByReservation( reservation );
    }



}
