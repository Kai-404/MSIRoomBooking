package com.mercury.MSIRoomBooking.services;

import com.mercury.MSIRoomBooking.beans.Room;
import com.mercury.MSIRoomBooking.daos.RoomDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoomService {

    @Autowired
    private RoomDao roomDao;

    public List<Room> getAll() {
        return roomDao.findAll();
    }
}
