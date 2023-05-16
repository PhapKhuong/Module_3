<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: phapk
  Date: 12-May-23
  Time: 8:18 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Create product</title>
</head>
<body>
<div>
    <c:if test="${error} == null">
        <h2>${error}</h2>
    </c:if>
    <form action="/" method="post">
        <table>
            <tr>
                <td><label for="id">ID</label></td>
                <td><input type="number" id="id" name="id" placeholder="Nhập vào ID" required></td>
            </tr>
            <tr>
                <td><label for="name">Name</label></td>
                <td><input type="text" id="name" name="name" placeholder="Nhập vào họ tên" required></td>
            </tr>
            <tr>
                <td><label for="price">Price</label></td>
                <td><input type="number" id="price" name="price" placeholder="Nhập vào giá" required></td>
            </tr>
            <tr>
                <td><label for="quantity">Quantity</label></td>
                <td><input type="number" id="quantity" name="quantity" placeholder="Nhập vào số lượng" required></td>
            </tr>
            <tr>
                <td><label for="origin">Origin</label></td>
                <td><input type="text" id="origin" name="origin" placeholder="Nhập vào nguồn gốc" required></td>
            </tr>
            <tr>
                <td><input type="reset" value="Reset"></td>
                <td><input type="submit" value="Create"></td>
            </tr>
        </table>
        <input type="hidden" name="action" value="create">
    </form>
</div>
</body>
</html>
