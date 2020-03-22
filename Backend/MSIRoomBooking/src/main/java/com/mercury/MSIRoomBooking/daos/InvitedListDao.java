package com.mercury.MSIRoomBooking.daos;

import com.mercury.MSIRoomBooking.beans.InvitedList;
import com.mercury.MSIRoomBooking.beans.Reservation;
import com.mercury.MSIRoomBooking.beans.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface InvitedListDao extends JpaRepository<InvitedList, Integer> {

    List<InvitedList> findAllByUserAndStatus (User user,String status);
    //<Reservation> findAllReservationByUserAndStatus (User user, String status);
    List<InvitedList> findAllByReservation (Reservation reservation);
}
