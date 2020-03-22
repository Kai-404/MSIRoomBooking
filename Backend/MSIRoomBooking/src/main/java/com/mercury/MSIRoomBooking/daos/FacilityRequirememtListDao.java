package com.mercury.MSIRoomBooking.daos;

import com.mercury.MSIRoomBooking.beans.FacilityRequirementList;
import com.mercury.MSIRoomBooking.beans.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface FacilityRequirememtListDao extends JpaRepository<FacilityRequirementList, Integer> {
    List<FacilityRequirementList> findAllByReservation (Reservation reservation);
}
