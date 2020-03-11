package com.mercury.MSIRoomBooking.daos;

import com.mercury.MSIRoomBooking.beans.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDao extends JpaRepository<User, Integer> {
    User findByEmail(String username);

}
