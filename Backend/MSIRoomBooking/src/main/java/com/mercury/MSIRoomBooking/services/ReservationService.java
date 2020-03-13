package com.mercury.MSIRoomBooking.services;

import com.mercury.MSIRoomBooking.beans.Reservation;
import com.mercury.MSIRoomBooking.daos.ReservationDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReservationService {

    @Autowired
    private ReservationDao reservationDao;

    public List<Reservation> getAll() {
        return reservationDao.findAll();
    }

    public void save(Reservation reservation) {
        reservationDao.save(reservation);
    }

}
