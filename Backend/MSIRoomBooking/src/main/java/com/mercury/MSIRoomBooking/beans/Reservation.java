package com.mercury.MSIRoomBooking.beans;


import javax.persistence.*;
import java.util.Date;


@Entity
@Table(name="RESERVATION")
public class Reservation {

    @Id
    private int id;

    @Column
    private String title;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.DETACH)
    @JoinColumn(name="ROOM_ID")
    private Room room;

    @ManyToOne(fetch = FetchType.EAGER,cascade = CascadeType.DETACH)
    @JoinColumn(name = "USER_ID")
    private User user;

    @Column
    private String Status;

    @Column(name = "START_TIME")
    private Date startTime;

    @Column(name = "END_TIME")
    private Date endTime;

    public Reservation() {
        super();
    }

    public Reservation(int id, String title, Room room, User user, String status, Date startTime, Date endTime) {
        this.id = id;
        this.title = title;
        this.room = room;
        this.user = user;
        Status = status;
        this.startTime = startTime;
        this.endTime = endTime;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Room getRoom() {
        return room;
    }

    public void setRoom(Room room) {
        this.room = room;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getStatus() {
        return Status;
    }

    public void setStatus(String status) {
        Status = status;
    }

    public Date getStartTime() {
        return startTime;
    }

    public void setStartTime(Date startTime) {
        this.startTime = startTime;
    }

    public Date getEndTime() {
        return endTime;
    }

    public void setEndTime(Date endTime) {
        this.endTime = endTime;
    }

    @Override
    public String toString() {
        return "Reservation{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", room=" + room +
                ", user=" + user +
                ", Status='" + Status + '\'' +
                ", startTime=" + startTime +
                ", endTime=" + endTime +
                '}';
    }
}
