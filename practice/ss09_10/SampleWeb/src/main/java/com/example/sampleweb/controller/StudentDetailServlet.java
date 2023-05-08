package com.example.sampleweb.controller;

import com.example.sampleweb.entity.Student;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Date;

@WebServlet(name = "StudentDetailServlet", value = "/student/detail")
public class StudentDetailServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        Student student = new Student();
        student.setId(1);
        student.setName("Hung");
        student.setSex(true);
        student.setBirthday(new Date());
        request.setAttribute("student", student);
        request.getRequestDispatcher("/student/detail_jstl.jsp")
                .forward(request, response);
    }
}
