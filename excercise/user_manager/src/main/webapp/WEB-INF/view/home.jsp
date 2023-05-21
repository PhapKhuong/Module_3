<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%--
  Created by IntelliJ IDEA.
  User: phapk
  Date: 21-May-23
  Time: 11:14 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Users Manager</title>
    <style>
        <%@include file="user_style.css"%>
    </style>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
</head>
<body>
<div class="container" id="wrapper">
    <div id="service">

        <!--------------------------------->
        <!--HIỂN THỊ DANH SÁCH NGƯỜI DÙNG-->
        <div id="list" class="btn-size">
            <a href="/" class="btn btn-primary">List</a>
        </div>


        <!------------------------------------->
        <!--THÊM MỚI NGƯỜI DÙNG VÀO DANH SÁCH-->
        <div id="create" class="btn-size">
            <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#createModal"
                    data-bs-name
                    data-bs-email
                    data-bs-country>
                Create
            </button>
            <div class="modal fade"
                 id="createModal"
                 tabindex="-1"
                 aria-labelledby="createModalLabel"
                 aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="createModalLabel">Create User</h5>
                            <button type="button"
                                    class="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close">
                            </button>
                        </div>
                        <div class="modal-body">
                            <form action="/" method="post">
                                <input type="hidden" name="action" value="create">
                                <div class="mb-3">
                                    <label for="name" class="col-form-label">Name:</label>
                                    <input type="text" class="form-control" id="name" name="name" required/>
                                </div>
                                <div class="mb-3">
                                    <label for="email" class="col-form-label">Email:</label>
                                    <input type="text" class="form-control" id="email" name="email" required/>
                                </div>
                                <div class="mb-3">
                                    <label for="country" class="col-form-label">Country:</label>
                                    <input type="text" class="form-control" id="country" name="country"/>
                                </div>

                                <div class="modal-footer">
                                    <input type="reset" class="btn btn-secondary" value="Reset">
                                    <input type="submit" class="btn btn-secondary" value="OK">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!---------------------------->
        <!--SỬA THÔNG TIN NGƯỜI DÙNG-->
        <div id="edit" class="btn-size">
            <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#editModal"
                    data-bs-name
                    data-bs-email
                    data-bs-country>
                Edit
            </button>
            <div class="modal fade"
                 id="editModal"
                 tabindex="-1"
                 aria-labelledby="editModalLabel"
                 aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="editModalLabel">Edit user</h5>
                            <button type="button"
                                    class="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close">
                            </button>
                        </div>
                        <div class="modal-body">
                            <form action="/" method="post">
                                <input type="hidden" name="action" value="edit">
                                <div class="mb-3">
                                    <label for="idUpdate" class="col-form-label">ID:</label>
                                    <input type="number" class="form-control" id="idUpdate" name="idUpdate" required/>
                                </div>
                                <div class="mb-3">
                                    <label for="newName" class="col-form-label">New name:</label>
                                    <input type="text" class="form-control" id="newName" name="newName"/>
                                </div>
                                <div class="mb-3">
                                    <label for="newEmail" class="col-form-label">New Email:</label>
                                    <input type="text" class="form-control" id="newEmail" name="newEmail"/>
                                </div>
                                <div class="mb-3">
                                    <label for="newCountry" class="col-form-label">New country:</label>
                                    <input type="text" class="form-control" id="newCountry" name="newCountry"/>
                                </div>

                                <div class="modal-footer">
                                    <input type="reset" class="btn btn-secondary" value="Reset">
                                    <input type="submit" class="btn btn-secondary" value="OK">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!---------------------------------->
        <!--XÓA NGƯỜI DÙNG TRONG DANH SÁCH-->
        <div id="delete" class="btn-size">
            <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#deleteModal"
                    data-bs-id>
                Delete
            </button>
            <div class="modal fade"
                 id="deleteModal"
                 tabindex="-1"
                 aria-labelledby="deleteModalLabel"
                 aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="deleteModalLabel">Delete user</h5>
                            <button type="button"
                                    class="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close">
                            </button>
                        </div>
                        <div class="modal-body">
                            <form action="/" method="post">
                                <input type="hidden" name="action" value="delete">
                                <div class="mb-3">
                                    <label for="delId" class="col-form-label">ID:</label>
                                    <input type="number" class="form-control" id="delId" name="delId" required/>
                                </div>

                                <div class="modal-footer">
                                    <input type="reset" class="btn btn-secondary" value="Reset">
                                    <input type="submit" class="btn btn-secondary" value="OK">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!------------------------------------>
        <!--TÌM KIẾM NGƯỜI DÙNG THEO COUNTRY-->
        <div id="findByCountry" class="btn-size">
            <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#findByCountryModal"
                    data-bs-country>
                Find
            </button>
            <div class="modal fade"
                 id="findByCountryModal"
                 tabindex="-1"
                 aria-labelledby="findByCountryModalLabel"
                 aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="findByCountryModalLabel">Find user by country</h5>
                            <button type="button"
                                    class="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close">
                            </button>
                        </div>
                        <div class="modal-body">
                            <form action="/" method="post">
                                <input type="hidden" name="action" value="findByCountry">
                                <div class="mb-3">
                                    <label for="byCountry" class="col-form-label">Country:</label>
                                    <input type="text" class="form-control" id="byCountry" name="byCountry"/>
                                </div>

                                <div class="modal-footer">
                                    <input type="reset" class="btn btn-secondary" value="Reset">
                                    <input type="submit" class="btn btn-secondary" value="OK">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!----------------------------------------->
        <!--SẮP XẾP DANH SÁCH THEO TÊN NGƯỜI DÙNG-->
        <div id="sortByName" class="btn-size">
            <form action="/" method="post">
                <input type="hidden" name="action" value="sortByName">
                <input type="submit" value="Sort" class="btn btn-primary">
            </form>
        </div>
    </div>


    <!--------------------------------->
    <!--HIỂN THỊ DANH SÁCH NGƯỜI DÙNG-->
    <div id="main-content">
        <div id="popup">
            <c:if test="${error!=null}">
                <h3>${error}</h3>
            </c:if>
        </div>
        <h2>List of Users</h2>
        <table class="table">
            <thread>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Country</th>
                </tr>
            </thread>
            <tbody>
            <c:forEach items="${users}" var="user">
                <tr class="col">
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.country}</td>
                </tr>
            </c:forEach>
            </tbody>
        </table>
    </div>
</div>
</body>
<script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous">
</script>
</html>
