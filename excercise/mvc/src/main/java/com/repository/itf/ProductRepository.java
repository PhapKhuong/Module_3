package com.repository.itf;

import com.bean.Product;

import java.util.List;

public interface ProductRepository {
    List<Product> display();

    boolean create(Product product);

    void update(Product product);

    boolean delete(Integer index);

    Product showDetail(Integer id);
}
