package com.controller;

import com.bean.Product;
import com.service.impl.ProductServiceImpl;
import com.service.itf.ProductService;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@WebServlet(name = "ProductServlet", value = "/")
public class ProductServlet extends HttpServlet {
    private ProductService service = new ProductServiceImpl();

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        showList(req, resp);
    }

    private void showList(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        List<Product> products = service.display();
        req.setAttribute("products", products);
        req.getRequestDispatcher("WEB-INF/view/product/home.jsp").forward(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String action = req.getParameter("action");
        switch (action) {
            case "create":
                doCreate(req, resp);
                break;
            case "edit":
                update(req, resp);
                break;
            case "detail":
                showDetail(req, resp);
                break;
            case "delete":
                doDel(req, resp);
                break;
            default:
                break;
        }
    }

    private void showDetail(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        int detailId = Integer.parseInt(req.getParameter("detailId"));
        List<Product> products = new ArrayList<>();
        Product product = service.showDetail(detailId);

        if (product == null) {
            String errorMsg = "ID of product is existed";
            req.setAttribute("error", errorMsg);
        } else {
            products.add(product);
            req.setAttribute("products", products);
        }
        req.getRequestDispatcher("WEB-INF/view/product/home.jsp").forward(req, resp);
    }

    private void update(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        List<Product> products = service.display();

        int idUpdate = Integer.parseInt(req.getParameter("idUpdate"));
        String name = null;
        double price = 0;
        int quantity = 0;
        String origin = null;

        for (Product p : products) {
            if (p.getId() == idUpdate) {
                name = p.getName();
                price = p.getPrice();
                quantity = p.getQuantity();
                origin = p.getOrigin();
                break;
            }
        }

        if (name == null) {
            String errorMsg = "ID of product is existed";
            req.setAttribute("error", errorMsg);
            req.getRequestDispatcher("WEB-INF/view/product/home.jsp").forward(req, resp);
        } else {
            String newName;
            newName = req.getParameter("newName");
            if (req.getParameter("newName") == "") {
                newName = name;
            }

            double newPrice;
            try {
                newPrice = Double.parseDouble(req.getParameter("newPrice"));
            } catch (NumberFormatException e) {
                newPrice = price;
            }

            int newQuantity;
            try {
                newQuantity = Integer.parseInt(req.getParameter("newQuantity"));
            } catch (NumberFormatException e) {
                newQuantity = quantity;
            }

            String newOrigin;
            newOrigin = req.getParameter("newOrigin");
            if (req.getParameter("newOrigin") == "") {
                newOrigin = origin;
            }

            Product product = new Product(idUpdate, newName, newPrice, newQuantity, newOrigin);
            service.update(product);

            resp.sendRedirect("/");
        }
    }

    private void doDel(HttpServletRequest req, HttpServletResponse resp) throws IOException, ServletException {
        int delId = Integer.parseInt(req.getParameter("delId"));

        if (service.delete(delId)) {
            resp.sendRedirect("/");
        } else {
            String errorMsg = "ID of product is existed";
            req.setAttribute("error", errorMsg);
            req.getRequestDispatcher("WEB-INF/view/product/home.jsp").forward(req, resp);
        }
    }

    private void doCreate(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        int id = Integer.parseInt(req.getParameter("id"));
        String name = req.getParameter("name");
        double price = Double.parseDouble(req.getParameter("price"));
        int quantity = Integer.parseInt(req.getParameter("quantity"));
        String origin = req.getParameter("origin");

        Product p = new Product(id, name, price, quantity, origin);

        if (service.create(p)) {
            resp.sendRedirect("/");
        } else {
            String errorMsg = "ID of product is existed";
            req.setAttribute("error", errorMsg);
            req.getRequestDispatcher("WEB-INF/view/product/home.jsp").forward(req, resp);
        }
    }
}
