package com.mercury.MSIRoomBooking.beans;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="FACILITY")
public class Facility {

    @Id
    private int id;

    @Column
    private String name;

    @Column
    private int stock;

    @Column(name="IMAGE_URL")
    private String image;

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

    public int getStock() {
        return stock;
    }

    public void setStock(int stock) {
        this.stock = stock;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

	public Facility(int id, String name, int stock, String image) {
		super();
		this.id = id;
		this.name = name;
		this.stock = stock;
		this.image = image;
	}

	public Facility() {
		super();
	}

    @Override
    public String toString() {
        return "Facility{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", stock=" + stock +
                ", image='" + image + '\'' +
                '}';
    }
}
