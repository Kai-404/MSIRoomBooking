package com.mercury.MSIRoomBooking.beans;

import javax.persistence.*;

@Entity
@Table(name = "PARTICIPANTS_LIST")
public class ParticipantsList {

    @Id
    private int id;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.DETACH)
    @JoinColumn(name = "USER_ID")
    private User user;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.DETACH)
    @JoinColumn(name = "RESERVATION_ID")
    private Reservation reservation;

    public ParticipantsList() {
        super();
    }

    public ParticipantsList(int id, User user, Reservation reservation) {
        this.id = id;
        this.user = user;
        this.reservation = reservation;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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
        return "ParticipantsList{" +
                "id=" + id +
                ", user=" + user +
                ", reservation=" + reservation +
                '}';
    }
}
