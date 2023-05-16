package com.service.itf;

import com.bean.Product;

import java.util.List;

public interface ProductService {
    List<Product> display();

    boolean create(Product product);

    boolean update(Product product);

    boolean delete(Product product);

    Product showDetail();

    Product findByName(String name);
}
