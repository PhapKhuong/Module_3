<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: Linh
  Date: 5/5/2023
  Time: 8:36 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Student detail JSTL</title>
</head>
<body>
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
                <c:if test="${student.sex}">
                    Nam
                </c:if>
                <c:if test="${!student.sex}">
                    Nữ
                </c:if>
            </td>
        </tr>
        <tr>
            <td>Birthday</td>
            <td>${student.birthday}</td>
        </tr>
    </table>
</body>
</html>
