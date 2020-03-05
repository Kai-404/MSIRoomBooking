package com.mercury.MSIRoomBooking.daos;

import com.mercury.MSIRoomBooking.beans.Room;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoomDao extends JpaRepository<Room, Integer> {
}
