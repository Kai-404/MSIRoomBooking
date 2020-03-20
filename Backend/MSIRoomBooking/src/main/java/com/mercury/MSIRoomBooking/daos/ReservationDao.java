package com.mercury.MSIRoomBooking.daos;

import com.mercury.MSIRoomBooking.beans.Reservation;
import com.mercury.MSIRoomBooking.beans.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Temporal;

import javax.persistence.TemporalType;
import java.util.Date;
import java.util.List;

public interface ReservationDao extends JpaRepository<Reservation,Integer> {

    List<Reservation> findByRoomAndStartTimeAndEndTime(Room room,  Date startTime,Date endTime);
}
