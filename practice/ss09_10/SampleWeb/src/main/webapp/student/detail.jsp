<%@ page import="com.example.sampleweb.entity.Student" %><%--
  Created by IntelliJ IDEA.
  User: Linh
  Date: 5/5/2023
  Time: 8:36 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Student detail</title>
</head>
<body>
    <%
        Student st = (Student)request.getAttribute("student");
    %>
    <h1>Student detail</h1>
    <table>
        <tr>
            <td>ID</td>
            <td>${student.id}</td>
        </tr>
        <tr>
            <td>Name</td>
            <td>${student.name}</td>
        </tr>
        <tr>
            <td>Sex</td>
            <td>
                <%
                    if (st.isSex()) {
                %>
                    Nam
                <%
                    } else {
                %>
                    Nữ
                <%
                    }
                %>
            </td>
        </tr>
        <tr>
            <td>Birthday</td>
            <td>${student.birthday}</td>
        </tr>
    </table>
</body>
</html>
