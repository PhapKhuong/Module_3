<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%--  Created by IntelliJ IDEA.
  User: Linh
  Date: 5/5/2023
  Time: 8:54 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
    <h1>Student list JSTL</h1>
    <table>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Sex</th>
            <th>Birthday</th>
        </tr>
        <c:forEach items="${students}" var="st" varStatus="a">
            <tr>
                <td>${st.id}</td>
                <td>${st.name}</td>
                <td>
                    <c:if test="${st.sex}">
                        Nam
                    </c:if>
                    <c:if test="${!st.sex}">
                        Nữ
                    </c:if>
                </td>
                <td>
                    <fmt:formatDate value="${st.birthday}" pattern="dd/MM/yyyy"/>
                </td>
            </tr>
        </c:forEach>
    </table>
</body>
</html>
