<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%--
  Created by IntelliJ IDEA.
  User: phapk
  Date: 08-May-23
  Time: 3:55 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>List of Customers</title>
    <style>
        <%@include file="./style.css" %>
    </style>
</head>
<body>
<table>
    <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Date of Birth</th>
        <th>Address</th>
        <th>Picture</th>
    </tr>
    <c:forEach items="${customers}" var="customer">
        <tr style="height: 150px">
            <td>${customer.id}</td>
            <td>${customer.name}</td>
            <td>${customer.dateOfBirth}</td>
            <td>${customer.address}</td>
            <td style="width: 150px">
                <img src="${customer.picture}" width="200px">
            </td>
        </tr>
    </c:forEach>
</table>
</body>
</html>
