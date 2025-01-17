package com.mercury.MSIRoomBooking.services;

import com.mercury.MSIRoomBooking.beans.FacilityRequirementList;
import com.mercury.MSIRoomBooking.beans.InvitedList;
import com.mercury.MSIRoomBooking.beans.Reservation;
import com.mercury.MSIRoomBooking.beans.User;
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

    public InvitedList updateInvitation(InvitedList invitation){
        return invitedListDao.save( invitation );
    }

    public List<InvitedList> getInvitationByUser(User user){
        return  invitedListDao.findAllByUserAndStatus( user,"Invited" );
    }

    public List<InvitedList> getInvitedDetailByReservation(Reservation reservation){
        return invitedListDao.findAllByReservation( reservation );
    }
}
