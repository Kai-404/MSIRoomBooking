package com.mercury.MSIRoomBooking.beans;

import javax.persistence.*;

@Entity
@Table(name="FACILITY_REQUIREMENT_LIST")
public class FacilityRequirementList {

    @Id
    private int id;

    @Column
    private String status;

    @Column
    private int quantity;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.DETACH)
    @JoinColumn(name = "FACILITY_ID")
    private Facility facility;

    @ManyToOne(fetch = FetchType.EAGER, cascade =  CascadeType.DETACH)
    @JoinColumn(name = "RESERVATION_ID")
    private Reservation reservation;

    public FacilityRequirementList() {
        super();
    }

    public FacilityRequirementList(int id, String status, int quantity, Facility facility, Reservation reservation) {
        this.id = id;
        this.status = status;
        this.quantity = quantity;
        this.facility = facility;
        this.reservation = reservation;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public Facility getFacility() {
        return facility;
    }

    public void setFacility(Facility facility) {
        this.facility = facility;
    }

    public Reservation getReservation() {
        return reservation;
    }

    public void setReservation(Reservation reservation) {
        this.reservation = reservation;
    }

    @Override
    public String toString() {
        return "FacilityRequirementList{" +
                "id=" + id +
                ", status='" + status + '\'' +
                ", quantity=" + quantity +
                ", facility=" + facility +
                ", reservation=" + reservation +
                '}';
    }
}
