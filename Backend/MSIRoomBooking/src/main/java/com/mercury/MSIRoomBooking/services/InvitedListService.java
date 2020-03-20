package com.mercury.MSIRoomBooking.services;

import com.mercury.MSIRoomBooking.beans.FacilityRequirementList;
import com.mercury.MSIRoomBooking.beans.InvitedList;
import com.mercury.MSIRoomBooking.daos.InvitedListDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InvitedListService {

    @Autowired
    private InvitedListDao  invitedListDao;

    public void save(List<InvitedList> invitedList) {

            invitedListDao.saveAll( invitedList );

    }
}
