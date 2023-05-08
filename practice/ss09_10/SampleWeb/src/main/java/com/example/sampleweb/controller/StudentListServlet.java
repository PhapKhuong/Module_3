package com.example.sampleweb.controller;

import com.example.sampleweb.entity.Student;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@WebServlet(name = "StudentListServlet", value = "/student/list")
public class StudentListServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        List<Student> students = new ArrayList<>();
        students.add(new Student(1, "Hung", true, new Date()));
        students.add(new Student(2, "Lan", false, new Date()));
        students.add(new Student(3, "Thang", true, new Date()));
        students.add(new Student(4, "Mai", false, new Date()));
        students.add(new Student(5, "Anh", false, new Date()));
        request.setAttribute("students", students);
        request.getRequestDispatcher("/student/list_jstl.jsp")
                .forward(request, response);
    }
}
