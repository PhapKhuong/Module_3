<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: phapk
  Date: 11-May-23
  Time: 11:40 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Result</title>
</head>
<body>
<c:if test="${error != null}">
    <h1 style="color: red">${error}</h1>
</c:if>
<h1>Kết quả: ${result}</h1>
<a href="/calculator" style="color: blue"><b>BACK</b></a>
</body>
</html>
