package com.mercury.MSIRoomBooking.services;

import com.mercury.MSIRoomBooking.beans.Facility;
import com.mercury.MSIRoomBooking.daos.FacilityDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FacilityService {

    @Autowired
    private FacilityDao facilityDao;

    public Facility getFacilityByID(Integer id){
        return facilityDao.findById( id ).get();
    }

    public void save(Facility facility) {
            facilityDao.save(facility);

    }

    public List<Facility> getAll(){
        return facilityDao.findAll();
    }
}
