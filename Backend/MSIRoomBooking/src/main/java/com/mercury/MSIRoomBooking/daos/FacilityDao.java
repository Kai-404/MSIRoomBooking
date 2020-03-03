package com.mercury.MSIRoomBooking.daos;

import com.mercury.MSIRoomBooking.beans.Facility;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FacilityDao extends JpaRepository<Facility, Integer> {

}
