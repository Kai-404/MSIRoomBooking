package com.mercury.MSIRoomBooking.beans;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.security.core.GrantedAuthority;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="ROLE")
public class Role implements GrantedAuthority {

    @Id
    private int id;

    @Column
    private String type;



    public Role() {
        super();
    }

    public Role(int id) {
        super();
        this.id = id;
    }

    public Role(int id, String type) {
        this.id = id;
        this.type = type;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    @Override
    public String toString() {
        return "Role{" +
                "id=" + id +
                ", type='" + type + '\'' +
                '}';
    }

    @Override
    @JsonIgnore
    public String getAuthority() {
        return type;
    }
}
