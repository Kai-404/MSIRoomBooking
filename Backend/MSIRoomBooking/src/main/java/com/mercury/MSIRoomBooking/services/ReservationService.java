package com.mercury.MSIRoomBooking.services;

import com.mercury.MSIRoomBooking.beans.InvitedList;
import com.mercury.MSIRoomBooking.beans.Reservation;
import com.mercury.MSIRoomBooking.beans.User;
import com.mercury.MSIRoomBooking.daos.InvitedListDao;
import com.mercury.MSIRoomBooking.daos.ReservationDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;


import java.util.ArrayList;
import java.util.List;

@Service
public class ReservationService {

    @Autowired
    private ReservationDao reservationDao;

    @Autowired
    private InvitedListDao invitedListDao;

    public List<Reservation> getAll() {
        return reservationDao.findAll();
    }

    public Reservation save(Reservation reservation) {
        Reservation saved = reservationDao.saveAndFlush( reservation );
        return saved;
    }

    public List<Reservation> getUserReservations(User user) {

        List<Reservation> userReservations = reservationDao.findAllByUser( user );
        List<InvitedList> userAcceptedReservation = invitedListDao.findAllByUserAndStatus( user,"Accepted" );
        userAcceptedReservation.forEach( invitation -> userReservations.add(invitation.getReservation()) );

        return userReservations;

    }

}
