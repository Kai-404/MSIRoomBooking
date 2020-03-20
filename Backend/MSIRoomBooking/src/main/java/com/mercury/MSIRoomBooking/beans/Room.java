package com.mercury.MSIRoomBooking.beans;


import javax.persistence.*;

@Entity
@Table(name="ROOM")
public class Room {

    @Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;

    @Column
    private String name;

    @Column(name="MAX_CAPACITY")
    private int maxCapacity;

    @Column(name="IMAGE_URL")
    private String image;

    @Column
    private String status;

	public Room() {
		super();
	}

	public Room(int id, String name, int maxCapacity, String image, String status) {
		super();
		this.id = id;
		this.name = name;
		this.maxCapacity = maxCapacity;
		this.image = image;
		this.status = status;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getMaxCapacity() {
		return maxCapacity;
	}

	public void setMaxCapacity(int maxCapacity) {
		this.maxCapacity = maxCapacity;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

    @Override
    public String toString() {
        return "Room{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", maxCapacity=" + maxCapacity +
                ", image='" + image + '\'' +
                ", status='" + status + '\'' +
                '}';
    }
}
