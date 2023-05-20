package com.repository.impl;

import com.bean.Product;
import com.database.DBConnection;
import com.repository.itf.ProductRepository;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class ProductRepositoryImpl implements ProductRepository {

    private static final String SELECT_ALL_PRODUCT =
            "SELECT * FROM product";
    private static final String SELECT_ALL_PRODUCT_ID =
            "SELECT id FROM product";
    private static final String INSERT_NEW_PRODUCT =
            "INSERT INTO product (id, name, price, quantity, origin) VALUE (?, ?, ?, ?, ?)";
    private static final String UPDATE_PRODUCT =
            "UPDATE product SET name = ?, price = ?, quantity = ?, origin = ? WHERE id = ?";
    private static final String DELETE_PRODUCT =
            "DELETE FROM product WHERE id = ?";
    private static final String FIND_BY_ID =
            "SELECT * FROM product WHERE id = ?";

    @Override
    public List<Product> display() {
        Connection connection = DBConnection.getConnection();
        PreparedStatement statement = null;
        ResultSet resultSet = null;
        List<Product> productList = new ArrayList<>();
        if (connection != null) {
            try {
                statement = connection.prepareStatement(SELECT_ALL_PRODUCT);
                resultSet = statement.executeQuery();

                Product product = null;
                while (resultSet.next()) {
                    int id = resultSet.getInt("id");
                    String name = resultSet.getString("name");
                    double price = resultSet.getDouble("price");
                    int quantity = resultSet.getInt("quantity");
                    String origin = resultSet.getString("origin");
                    product = new Product(id, name, price, quantity, origin);
                    productList.add(product);
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
        return productList;
    }

    @Override
    public boolean create(Product product) {
        Connection connection = DBConnection.getConnection();
        PreparedStatement statement = null;
        ResultSet resultSet = null;
        List<Integer> idList = new ArrayList<>();

        if (connection != null) {
            try {
                statement = connection.prepareStatement(SELECT_ALL_PRODUCT_ID);
                resultSet = statement.executeQuery();
                while (resultSet.next()) {
                    idList.add(resultSet.getInt("id"));
                }

                if (idList.contains(product.getId())) {
                    return false;
                }

                statement = connection.prepareStatement(INSERT_NEW_PRODUCT);
                statement.setInt(1, product.getId());
                statement.setString(2, product.getName());
                statement.setDouble(3, product.getPrice());
                statement.setInt(4, product.getQuantity());
                statement.setString(5, product.getOrigin());

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

    @Override
    public void update(Product product) {
        Connection connection = DBConnection.getConnection();
        PreparedStatement statement = null;

        if (connection != null) {
            try {
                statement = connection.prepareStatement(UPDATE_PRODUCT);
                statement.setString(1, product.getName());
                statement.setDouble(2, product.getPrice());
                statement.setInt(3, product.getQuantity());
                statement.setString(4, product.getOrigin());
                statement.setInt(5, product.getId());

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
    public boolean delete(Integer index) {
        Connection connection = DBConnection.getConnection();
        PreparedStatement statement = null;
        ResultSet resultSet = null;
        List<Integer> idList = new ArrayList<>();

        if (connection != null) {
            try {
                statement = connection.prepareStatement(SELECT_ALL_PRODUCT_ID);
                resultSet = statement.executeQuery();
                while (resultSet.next()) {
                    idList.add(resultSet.getInt("id"));
                }

                if(!idList.contains(index)) {
                    return false;
                }

                statement = connection.prepareStatement(DELETE_PRODUCT);
                statement.setInt(1,index);
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

    @Override
    public Product showDetail(Integer id) {
        Connection connection = DBConnection.getConnection();
        PreparedStatement statement = null;
        ResultSet resultSet = null;
        Product product = null;

        if (connection != null) {
            try {
                statement = connection.prepareStatement(FIND_BY_ID);
                statement.setInt(1, id);
                resultSet = statement.executeQuery();

                while (resultSet.next()) {
                    String name = resultSet.getString("name");
                    double price = resultSet.getDouble("price");
                    int quantity = resultSet.getInt("quantity");
                    String origin = resultSet.getString("origin");

                    product = new Product(id, name, price, quantity, origin);
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
        return product;
    }
}
