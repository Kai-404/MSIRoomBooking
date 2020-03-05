package com.mercury.MSIRoomBooking.daos;

import com.mercury.MSIRoomBooking.beans.ParticipantsList;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ParticipantsListDao extends JpaRepository<ParticipantsList,Integer> {
}
