package com.ss10_2_calculator;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet(name = "CalculatorApp", value = "/calculator")
public class CalculatorApp extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        req.getRequestDispatcher("WEB-INF/ss10_2_io_calculator/input_cal.jsp").forward(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        double firstNum = Double.parseDouble(req.getParameter("firstNum"));
        double secondNum = Double.parseDouble(req.getParameter("secondNum"));
        String operator = req.getParameter("operator");
        double result = 0;

        switch (operator) {
            case "add":
                result = firstNum + secondNum;
                break;
            case "sub":
                result = firstNum - secondNum;
                break;
            case "multi":
                result = firstNum * secondNum;
                break;
            case "div":
                try {
                    if (secondNum != 0) {
                        result = firstNum / secondNum;
                    } else {
                        throw new ArithmeticException();
                    }
                } catch (ArithmeticException e) {
                    String errorMsg = "Second operand can not be 0!";
                    req.setAttribute("error", errorMsg);
                    req.getRequestDispatcher("WEB-INF/ss10_2_io_calculator/result.jsp");
                }
                break;
        }

        req.setAttribute("result", result);
        req.getRequestDispatcher("WEB-INF/ss10_2_io_calculator/result.jsp").forward(req, resp);
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
