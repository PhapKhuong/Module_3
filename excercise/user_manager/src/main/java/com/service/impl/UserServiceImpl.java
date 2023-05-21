package com.service.impl;

import com.bean.User;
import com.repository.impl.UserRepositoryImpl;
import com.repository.itf.UserRepository;
import com.service.itf.UserService;

import java.util.List;

public class UserServiceImpl implements UserService {
    private UserRepository repository = new UserRepositoryImpl();

    @Override
    public List<User> display() {
        return repository.display();
    }

    @Override
    public void create(String name, String email, String country) {
        repository.create(name, email, country);
    }

    @Override
    public void update(User user) {
        repository.update(user);
    }

    @Override
    public boolean delete(int id) {
        return repository.delete(id);
    }

    public List<User> findByCountry(String country) {
        return repository.findByCountry(country);
    }

    public List<User> sortByName() {
        return repository.sortByName();
    }
}
