package com.mercury.MSIRoomBooking.controllers;

import com.mercury.MSIRoomBooking.beans.Facility;
import com.mercury.MSIRoomBooking.services.FacilityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/facilities")
public class FacilityController {

    @Autowired
    private FacilityService facilityService;

    @GetMapping("/{id}")
    public Facility getById(@PathVariable int id) {
        return facilityService.getFacilityByID(id);
    }

    @PostMapping
    public void save(@RequestBody Facility facility) {
        facilityService.save(facility);
    }
}
