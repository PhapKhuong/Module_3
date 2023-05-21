package com.controller;

import com.bean.User;
import com.service.impl.UserServiceImpl;
import com.service.itf.UserService;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@WebServlet(name = "UserServlet", value = "/")
public class UserServlet extends HttpServlet {
    private UserService service = new UserServiceImpl();

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        showList(req, resp);
    }

    private void showList(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        List<User> users = service.display();
        req.setAttribute("users", users);
        req.getRequestDispatcher("WEB-INF/view/home.jsp").forward(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String action = req.getParameter("action");
        switch (action) {
            case "create":
                doCreate(req, resp);
                break;
            case "edit":
                doEdit(req, resp);
                break;
            case "delete":
                doDel(req, resp);
                break;
            case "findByCountry":
                findByCountry(req, resp);
                break;
            case "sortByName":
                sortByName(req, resp);
                break;
            default:
                break;
        }
    }

    private void doCreate(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        String name = req.getParameter("name");
        String email = req.getParameter("email");
        String country = req.getParameter("country");
        if (country == "") {
            country = "NULL";
        }
        service.create(name, email, country);
        resp.sendRedirect("/");
    }

    private void doEdit(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        int idUpdate = Integer.parseInt(req.getParameter("idUpdate"));
        List<User> userList = service.display();
        String name = null;
        String email = null;
        String country = null;
        for (User user : userList) {
            if (user.getId() == idUpdate) {
                name = user.getName();
                email = user.getEmail();
                country = user.getCountry();
                break;
            }
        }

        if (name == null) {
            String errorMsg = "ID of user is existed";
            req.setAttribute("error", errorMsg);
            req.getRequestDispatcher("WEB-INF/view/home.jsp").forward(req, resp);
        } else {
            String newName = req.getParameter("newName");
            if (newName == "") {
                newName = name;
            }
            String newEmail = req.getParameter("newEmail");
            if (newEmail == "") {
                newEmail = email;
            }
            String newCountry = req.getParameter("newCountry");
            if (newCountry == "") {
                newCountry = country;
            }
            User user = new User(idUpdate, newName, newEmail, newCountry);
            service.update(user);
            resp.sendRedirect("/");
        }
    }

    private void doDel(HttpServletRequest req, HttpServletResponse resp) throws IOException, ServletException {
        int delId = Integer.parseInt(req.getParameter("delId"));
        if (service.delete(delId)) {
            resp.sendRedirect("/");
        } else {
            String errorMsg = "ID of user is existed";
            req.setAttribute("error", errorMsg);
            req.getRequestDispatcher("WEB-INF/view/home.jsp").forward(req, resp);
        }
    }

    private void findByCountry(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String byCountry = req.getParameter("byCountry");
        List<User> users = service.findByCountry(byCountry);

        if (users.size() == 0) {
            String errorMsg = "List of user is empty!";
            req.setAttribute("error", errorMsg);
        } else {
            req.setAttribute("users", users);
        }
        req.getRequestDispatcher("WEB-INF/view/home.jsp").forward(req, resp);
    }

    private void sortByName(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        List<User> users = service.sortByName();
        req.setAttribute("users", users);
        req.getRequestDispatcher("WEB-INF/view/home.jsp").forward(req, resp);
    }
}
