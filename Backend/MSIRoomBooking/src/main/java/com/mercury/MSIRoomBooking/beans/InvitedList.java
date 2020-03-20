package com.mercury.MSIRoomBooking.beans;

import javax.persistence.*;

@Entity
@Table(name = "INVITED_LIST")
public class InvitedList {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;

    @Column
    private String status;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.DETACH)
    @JoinColumn(name = "USER_ID")
    private User user;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.DETACH)
    @JoinColumn(name = "RESERVATION_ID")
    private Reservation reservation;

    public InvitedList() {
        super();
    }

    public InvitedList(int id, String status, User user, Reservation reservation) {
        this.id = id;
        this.status = status;
        this.user = user;
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

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Reservation getReservation() {
        return reservation;
    }

    public void setReservation(Reservation reservation) {
        this.reservation = reservation;
    }

    @Override
    public String toString() {
        return "InvitedList{" +
                "id=" + id +
                ", status='" + status + '\'' +
                ", user=" + user +
                ", reservation=" + reservation +
                '}';
    }
}
