package com.service.itf;

import com.bean.Product;

import java.util.List;

public interface ProductService {
    List<Product> display();

    boolean create(Product product);

    void update(Product product);

    boolean delete(Integer index);

    Product showDetail(Integer id);
}
