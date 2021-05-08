package com.Springbootbackend.Springboot;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import java.util.Objects;

@Entity

public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private long id;

    private String user;

    private String password;

    private String email;

    private String country;

    public User() {
    }

    public User(String user, String password, String email, String country) {
        this.user = user;
        this.password = password;
        this.email = email;
        this.country = country;

    }

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        User user_table = (User) o;
        return Objects.equals(id, user_table.id) && Objects.equals(user, user_table.user) &&

                Objects.equals(password, user_table.password) && Objects.equals(email, user_table.email)
                && Objects.equals(country, user_table.country);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id, user, password, email, country);
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getUserName() {
        return this.user;
    }

    public void setUser(String userName) {
        this.user = userName;

    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;

    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;

    }

    public String getCountry() {
        return this.country;
    }

    public void setCountry(String country) {
        this.country = country;

    }

}