<%--
  Created by IntelliJ IDEA.
  User: phapk
  Date: 08-May-23
  Time: 5:45 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
<form action="/index_product" method="post">
    <table>
        <tr>
            <td><label for="description">Description</label></td>
            <td><input type="text" id="description"></td>
        </tr>
        <tr>
            <td><label for="price">List Price</label></td>
            <td><input type="number" id="price" name="price"></td>
        </tr>
        <tr>
            <td><label for="discount">Percent (%)</label></td>
            <td><input type="number" id="discount" name="discount"></td>
        </tr>
        <tr>
            <td></td>
            <td>
                <input type="submit" value="Submit">
            </td>
        </tr>
    </table>
</form>
</body>
</html>
