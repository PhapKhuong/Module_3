<%@ page import="java.util.List" %>
<%@ page import="com.example.sampleweb.entity.Student" %><%--
  Created by IntelliJ IDEA.
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
    <%
        List<Student> students = (List<Student>)request.getAttribute("students");
    %>
    <h1>Student list</h1>
    <table>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Sex</th>
            <th>Birthday</th>
        </tr>
        <%
            for (Student st: students) {
                %>
                <tr>
                    <td><%=st.getId()%></td>
                    <td><%=st.getName()%></td>
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
                    <td><%=st.getBirthday()%></td>
                </tr>
                <%
            }
        %>

    </table>
</body>
</html>
