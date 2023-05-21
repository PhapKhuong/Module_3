package com.repository.impl;

import com.bean.User;
import com.database.DBConnection;
import com.repository.itf.UserRepository;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class UserRepositoryImpl implements UserRepository {
    private final String SELECT_ALL_USER =
            "SELECT * FROM users";
    private final String SELECT_ALL_USER_ID =
            "SELECT id FROM users";
    private final String INSERT_NEW_USER =
            "INSERT INTO users (name, email, country) VALUE (?, ?, ?)";
    private final String UPDATE_USER =
            "UPDATE users SET name = ?, email = ?, country = ? WHERE id = ?";
    private final String DELETE_USER =
            "DELETE FROM users WHERE id = ?";
    private final String SELECT_USER_BY_COUNTRY =
            "SELECT * FROM users WHERE country = ?";
    private final String SORT_BY_NAME =
            "SELECT * FROM users ORDER BY name";

    @Override
    public List<User> display() {
        Connection connection = DBConnection.getConnection();
        PreparedStatement statement = null;
        ResultSet resultSet = null;
        List<User> userList = new ArrayList<>();

        if (connection != null) {
            try {
                statement = connection.prepareStatement(SELECT_ALL_USER);
                resultSet = statement.executeQuery();
                while (resultSet.next()) {
                    int id = resultSet.getInt("id");
                    String name = resultSet.getString("name");
                    String email = resultSet.getString("email");
                    String country = resultSet.getString("country");
                    userList.add(new User(id, name, email, country));
                }
            } catch (SQLException e) {
                e.printStackTrace();
            } finally {
                try {
                    statement.close();
                    connection.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
                DBConnection.close();
            }
        }
        return userList;
    }

    @Override
    public void create(String name, String email, String country) {
        Connection connection = DBConnection.getConnection();
        PreparedStatement statement = null;

        if (connection != null) {
            try {
                statement = connection.prepareStatement(INSERT_NEW_USER);
                statement.setString(1, name);
                statement.setString(2, email);
                statement.setString(3, country);
                statement.executeUpdate();
            } catch (SQLException e) {
                e.printStackTrace();
            } finally {
                try {
                    statement.close();
                    connection.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
                DBConnection.close();
            }
        }
    }

    @Override
    public void update(User user) {
        Connection connection = DBConnection.getConnection();
        PreparedStatement statement = null;

        if (connection != null) {
            try {
                statement = connection.prepareStatement(UPDATE_USER);
                statement.setString(1, user.getName());
                statement.setString(2, user.getEmail());
                statement.setString(3, user.getCountry());
                statement.setInt(4, user.getId());
                statement.executeUpdate();
            } catch (SQLException e) {
                e.printStackTrace();
            } finally {
                try {
                    statement.close();
                    connection.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
                DBConnection.close();
            }
        }
    }

    @Override
    public boolean delete(int id) {
        Connection connection = DBConnection.getConnection();
        PreparedStatement statement = null;
        ResultSet resultSet = null;
        List<Integer> idList = new ArrayList<>();

        if (connection != null) {
            try {
                statement = connection.prepareStatement(SELECT_ALL_USER_ID);
                resultSet = statement.executeQuery();
                while (resultSet.next()) {
                    idList.add(resultSet.getInt("id"));
                }
                if (!idList.contains(id)) {
                    return false;
                }

                statement = connection.prepareStatement(DELETE_USER);
                statement.setInt(1, id);
                statement.executeUpdate();
            } catch (SQLException e) {
                e.printStackTrace();
            } finally {
                try {
                    statement.close();
                    connection.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
                DBConnection.close();
            }
        }
        return true;
    }

    public List<User> findByCountry(String country) {
        Connection connection = DBConnection.getConnection();
        PreparedStatement statement = null;
        ResultSet resultSet = null;
        List<User> userList = new ArrayList<>();

        if (connection != null) {
            try {
                statement = connection.prepareStatement(SELECT_USER_BY_COUNTRY);
                statement.setString(1, country);

                resultSet = statement.executeQuery();
                while (resultSet.next()) {
                    int id = resultSet.getInt("id");
                    String name = resultSet.getString("name");
                    String email = resultSet.getString("email");
                    userList.add(new User(id, name, email, country));
                }
            } catch (SQLException e) {
                e.printStackTrace();
            } finally {
                try {
                    statement.close();
                    connection.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
                DBConnection.close();
            }
        }
        return userList;
    }

    public List<User> sortByName() {
        Connection connection = DBConnection.getConnection();
        PreparedStatement statement = null;
        ResultSet resultSet = null;
        List<User> userList = new ArrayList<>();

        if (connection != null) {
            try {
                statement = connection.prepareStatement(SORT_BY_NAME);
                resultSet = statement.executeQuery();
                while (resultSet.next()) {
                    int id = resultSet.getInt("id");
                    String name = resultSet.getString("name");
                    String email = resultSet.getString("email");
                    String country = resultSet.getString("country");
                    userList.add(new User(id, name, email, country));
                }
            } catch (SQLException e) {
                e.printStackTrace();
            } finally {
                try {
                    statement.close();
                    connection.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
                DBConnection.close();
            }
        }
        return userList;
    }
}
