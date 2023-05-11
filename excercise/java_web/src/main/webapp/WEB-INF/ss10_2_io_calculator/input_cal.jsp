<%--
  Created by IntelliJ IDEA.
  User: phapk
  Date: 11-May-23
  Time: 10:07 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Calculator</title>
    <style><%@include file="input_style.css"%></style>
</head>
<body>
    <div id="wrapper">
            <form action="/calculator" method="post">
                <h1>Simple Calculator</h1>
                <fieldset>
                <legend>Calculator</legend>
                <table>
                    <tr>
                        <td><label for="firstNum">First operand:</label></td>
                        <td><input type="number" id="firstNum" name="firstNum" required></td>
                    </tr>
                    <tr>
                        <td><label>Operator:</label></td>
                        <td>
                            <select name="operator">
                                <option value="add">Add</option>
                                <option value="sub">Sub</option>
                                <option value="multi">Multi</option>
                                <option value="div">Div</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td><label for="secondNum">Second operand:</label></td>
                        <td><input type="number" id="secondNum" name="secondNum" required></td>
                    </tr>
                    <tr>
                        <td><input type="reset" value="Reset"></td>
                        <td><input type="submit" value="Calculate"></td>
                    </tr>
                </table>
                </fieldset>
            </form>
    </div>
</body>
</html>
