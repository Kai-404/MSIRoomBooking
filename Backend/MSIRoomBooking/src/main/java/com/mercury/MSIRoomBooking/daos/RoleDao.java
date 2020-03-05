package com.mercury.MSIRoomBooking.daos;

import com.mercury.MSIRoomBooking.beans.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleDao extends JpaRepository<Role, Integer> {
}
