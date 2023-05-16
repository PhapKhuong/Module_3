<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%--
  Created by IntelliJ IDEA.
  User: phapk
  Date: 12-May-23
  Time: 6:21 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>List of Products</title>
    <style>
        <%@include file="style.css" %>
    </style>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
</head>
<body>
<div class="container" id="wrapper">
    <fmt:setLocale value="vi_VN"/>

    <div id="service">

        <!-- THÊM MỚI MỘT SẢN PHẨM -->
        <div id="create" class="btn-size">
            <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#createModal"
                    data-bs-id
                    data-bs-name
                    data-bs-price
                    data-bs-quantity
                    data-bs-origin>
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
                            <h5 class="modal-title" id="createModalLabel">Create product</h5>
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
                                    <label for="id" class="col-form-label">ID:</label>
                                    <input type="number" class="form-control" id="id" name="id" required/>
                                </div>
                                <div class="mb-3">
                                    <label for="name" class="col-form-label">Name:</label>
                                    <input type="text" class="form-control" id="name" name="name" required/>
                                </div>
                                <div class="mb-3">
                                    <label for="price" class="col-form-label">Price:</label>
                                    <input type="number" class="form-control" id="price" name="price" required/>
                                </div>
                                <div class="mb-3">
                                    <label for="quantity" class="col-form-label">Quantity:</label>
                                    <input type="number" class="form-control" id="quantity" name="quantity" required/>
                                </div>
                                <div class="mb-3">
                                    <label for="origin" class="col-form-label">Origin:</label>
                                    <input type="text" class="form-control" id="origin" name="origin" required/>
                                </div>

                                <div class="modal-footer">
                                    <input type="reset"
                                           class="btn btn-secondary"
                                           value="Reset">
                                    <input type="submit" value="OK" class="btn btn-primary">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- XÓA SẢN PHẨM -->
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
                            <h5 class="modal-title" id="deleteModalLabel">Delete product</h5>
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
                                    <input type="reset"
                                           class="btn btn-secondary"
                                           value="Reset">
                                    <input type="submit" value="OK" class="btn btn-primary">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>

    <div id="main-content">
        <div id="popup">
            <c:if test="${error != null}"><h3>${error}</h3></c:if>
        </div>
        <h2>List of Products</h2>
        <table class="table">
            <thread>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Origin</th>
                </tr>
            </thread>
            <tbody>
            <c:forEach items="${products}" var="product">
                <tr class="col">
                    <td>${product.id}</td>
                    <td>${product.name}</td>
                    <td><fmt:formatNumber value="${product.price}" type="currency"/></td>
                    <td>${product.quantity}</td>
                    <td>${product.origin}</td>
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
