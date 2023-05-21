package com.service.itf;

import com.bean.User;

import java.util.List;

public interface UserService {
    List<User> display();

    void create(String name, String email, String country);

    void update(User user);

    boolean delete(int id);

    List<User> findByCountry(String country);

    List<User> sortByName();
}
