package com.mercury.MSIRoomBooking.services;

import com.mercury.MSIRoomBooking.beans.Facility;
import com.mercury.MSIRoomBooking.beans.FacilityRequirementList;
import com.mercury.MSIRoomBooking.daos.FacilityRequirememtListDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FacilityRequirementListService {

    @Autowired
    private FacilityRequirememtListDao facilityRequirememtListDao;

    public void save(List<FacilityRequirementList> facilityRequirementList) {
            facilityRequirememtListDao.saveAll( facilityRequirementList );

    }
}
