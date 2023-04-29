package com.servlet_life;

import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet(name = "ServletLifeCycle", value = "/servlet-life-cycle")
public class ServletLifeCycle extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("Chạy vào hàm doGet");
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("Chạy vào hàm doPost");
    }

    @Override
    public void destroy() {
        System.out.println("Server sập rồi");
    }

    @Override
    public void init() throws ServletException {
        System.out.println("Chạy vào hàm khởi tạo");
    }

    @Override
    public void service(ServletRequest req, ServletResponse res) throws ServletException, IOException {
        super.service(req, res);
        System.out.println("Chạy vào hàm service");
    }
}
