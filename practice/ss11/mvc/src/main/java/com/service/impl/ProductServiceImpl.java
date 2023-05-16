package com.service.impl;

import com.bean.Product;
import com.repository.impl.ProductRepositoryImpl;
import com.repository.itf.ProductRepository;
import com.service.itf.ProductService;

import java.util.List;

public class ProductServiceImpl implements ProductService {
    private ProductRepository repository = new ProductRepositoryImpl();

    @Override
    public List<Product> display() {
        return repository.display();
    }

    @Override
    public boolean create(Product product) {
        return repository.create(product);
    }

    @Override
    public boolean update(Product product) {
        return false;
    }

    @Override
    public boolean delete(Product product) {
        return false;
    }

    @Override
    public Product showDetail() {
        return null;
    }

    @Override
    public Product findByName(String name) {
        return null;
    }
}
