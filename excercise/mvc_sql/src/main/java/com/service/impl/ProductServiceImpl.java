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
    public void update(Product product) {
        repository.update(product);
    }

    @Override
    public boolean delete(Integer index) {
        return repository.delete(index);
    }

    @Override
    public Product showDetail(Integer id) {
        return repository.showDetail(id);
    }
}
