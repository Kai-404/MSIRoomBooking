package com.mercury.MSIRoomBooking.daos;

import com.mercury.MSIRoomBooking.beans.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReservationDao extends JpaRepository<Reservation,Integer> {
}
