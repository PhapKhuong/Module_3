package com.repository.itf;

import com.bean.Product;

import java.util.List;

public interface ProductRepository {
    List<Product> display();

    boolean create(Product product);

    boolean update(Product product);

    boolean delete(Product product);

    Product showDetail();

    Product findByName(String name);
}
