package com.repository.itf;

import com.bean.User;

import java.util.List;

public interface UserRepository {
    List<User> display();

    void create(String name, String email, String country);

    void update(User user);

    boolean delete(int id);

    List<User> findByCountry(String country);

    List<User> sortByName();
}
