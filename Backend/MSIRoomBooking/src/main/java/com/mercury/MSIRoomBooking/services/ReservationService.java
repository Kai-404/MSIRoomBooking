package com.mercury.MSIRoomBooking.services;

import com.mercury.MSIRoomBooking.beans.Reservation;
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

    public List<Reservation> getAll() {
        return reservationDao.findAll();
    }

    public Reservation save(Reservation reservation) {
        reservationDao.save(reservation);
        return reservationDao.findByRoomAndStartTimeAndEndTime( reservation.getRoom(), reservation.getStartTime(),reservation.getEndTime()).get( 0 );
    }

    public List<Reservation> getUserReservations(int userId) {

        List<Reservation> userReservations = new ArrayList<>();

        reservationDao.findAll().forEach( reservation ->{
            if (reservation.getUser().getId() == userId)
                userReservations.add(reservation) ;
        } );

        return userReservations;

    }

}
