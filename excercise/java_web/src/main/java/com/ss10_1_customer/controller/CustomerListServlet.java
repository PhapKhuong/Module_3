package com.ss10_1_customer.controller;

import com.ss10_1_customer.model.Customer;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

public class CustomerListServlet extends HttpServlet {
    final String IMG1 = "https://th.bing.com/th/id/R.4375d8ff9068dd8dabf4c8ca00abb2d3?rik=26P5Yj3KFA%2fMhw&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2fa%2fa2%2fLionel_Messi_Player_of_the_Year_3%2c_2011.jpg&ehk=06f%2fiKS7hlQL9I52KuuT%2fqYGIYhLWc5d1jx%2fQgp1yBQ%3d&risl=&pid=ImgRaw&r=0";
    final String IMG2 = "https://m.media-amazon.com/images/M/MV5BZGM0YjhkZmEtNGYxYy00OTk0LThlNDgtNGQzM2YwNjU0NDQzXkEyXkFqcGdeQXVyMTU3ODQxNDYz._V1_FMjpg_UX1000_.jpg";
    final String IMG3 = "https://s.hs-data.com/bilder/spieler/gross/59947.jpg";
    final String IMG4 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ28tGhy18KbEKWSjAwAVtD_SpRICjc1ttxSozTKnkS6O9LsENqs8JlKw78uN1ViYM-9Sw&usqp=CAU";
    final String IMG5 = "https://media.zenfs.com/en/evening_standard_239/a8b5bd0625a360df8d7abb1d2c4a25c6";

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        List<Customer> customers = new ArrayList<>();

        customers.add(new Customer(
                1, "Lionel Messi", LocalDate.of(1987, 6, 24), "Argentina", IMG1));
        customers.add(new Customer(
                2, "Hong Ha", LocalDate.of(1996, 9, 28), "Da Nang", IMG2));
        customers.add(new Customer(
                3, "Olivier Giroud", LocalDate.of(1986, 9, 30), "France", IMG3));
        customers.add(new Customer(
                4, "Tu Thanh", LocalDate.of(2021, 6, 24), "Nam Dinh", IMG4));
        customers.add(new Customer(
                5, "Benjamin White", LocalDate.of(1997, 10, 8), "England", IMG5));

        req.setAttribute("customers", customers);
        req.getRequestDispatcher("WEB-INF/ss10_1_customerList/display.jsp").forward(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    }

    @Override
    public void destroy() {
        super.destroy();
    }

    @Override
    public void init() throws ServletException {
        super.init();
    }
}
