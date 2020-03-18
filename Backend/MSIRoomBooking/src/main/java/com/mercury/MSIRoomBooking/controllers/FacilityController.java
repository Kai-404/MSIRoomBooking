package com.mercury.MSIRoomBooking.controllers;

import com.mercury.MSIRoomBooking.beans.Facility;
import com.mercury.MSIRoomBooking.services.FacilityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/facilities")
public class FacilityController {

    @Autowired
    private FacilityService facilityService;

    @GetMapping("/{id}")
    public Facility getById(@PathVariable int id) {
        return facilityService.getFacilityByID(id);
    }

    @GetMapping
    public List<Facility> getAll() {
        return facilityService.getAll();
    }

    @PostMapping
    public void save(@RequestBody Facility facility) {
        facilityService.save(facility);
    }
}
