package com.mercury.MSIRoomBooking.daos;

import com.mercury.MSIRoomBooking.beans.InvitedList;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InvitedListDao extends JpaRepository<InvitedList, Integer> {
}
