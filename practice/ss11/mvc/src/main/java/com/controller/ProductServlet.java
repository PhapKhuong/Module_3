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
import java.util.List;

@WebServlet(name = "ProductServlet", value = "/")
public class ProductServlet extends HttpServlet {
    private ProductService service = new ProductServiceImpl();

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String action = req.getParameter("action");
        if (action == null) {
            showList(req, resp);
        } else {
            switch (action) {
                case "create":
                    showCreate(req, resp);
                    break;
                case "update":
                    break;
                case "detail":
                    break;
                case "findByName":
                    break;
                case "delete":
                    break;
                default:
                    break;
            }
        }
    }

    private void showList(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        List<Product> products = service.display();
        req.setAttribute("products", products);
        req.getRequestDispatcher("WEB-INF/view/product/list.jsp").forward(req, resp);
    }

    private void showCreate(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        req.getRequestDispatcher("WEB-INF/view/product/create.jsp").forward(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String action = req.getParameter("action");
        switch (action) {
            case "create":
                doCreate(req, resp);
                break;
            case "update":
                break;
            case "detail":
                break;
            case "findByName":
                break;
            case "delete":
                break;
            default:
                break;
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
            List<Product> products = service.display();
            String errorMsg = "ID of product is existed";
            req.setAttribute("error", errorMsg);
            req.setAttribute("products", products);
            req.getRequestDispatcher("WEB-INF/view/product/list.jsp").forward(req, resp);
        }
    }


}
