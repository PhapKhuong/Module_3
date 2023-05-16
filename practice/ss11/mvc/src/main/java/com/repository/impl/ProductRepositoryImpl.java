package com.repository.impl;

import com.bean.Product;
import com.repository.itf.ProductRepository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ProductRepositoryImpl implements ProductRepository {
    private static Map<Integer, Product> productMap;

    static {
        productMap = new HashMap<>();
        productMap.put(1, new Product(1,"Iphone 7", 7000000, 12, "USA"));
        productMap.put(2, new Product(2,"Iphone X", 10000000, 5, "Vietnam"));
        productMap.put(3, new Product(3,"Iphone 11", 15000000, 9, "England"));
        productMap.put(4, new Product(4,"Iphone 12", 16000000, 21, "China"));
        productMap.put(5, new Product(5,"Iphone 14", 20000000, 4, "Japan"));
    }

    @Override
    public List<Product> display() {
        return new ArrayList<>(productMap.values());
    }

    @Override
    public boolean create(Product product) {
        if (productMap.containsKey(product.getId())) {
            return false;
        }
        productMap.put(product.getId(), product);
        return true;
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
