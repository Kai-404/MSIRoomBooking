package com.mercury.MSIRoomBooking.controllers;

import com.mercury.MSIRoomBooking.beans.Facility;
import com.mercury.MSIRoomBooking.beans.FacilityRequirementList;
import com.mercury.MSIRoomBooking.services.FacilityRequirementListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/facilityRequirementLists")
public class FacilityRequirementListController {

    @Autowired
    public FacilityRequirementListService facilityRequirementListService;


    @PostMapping
    public void save(@RequestBody List<FacilityRequirementList> facilityRequirementList) {
        System.out.println( "Saving: "+facilityRequirementList );
        facilityRequirementListService.save(facilityRequirementList);
    }



}
