var createModal = document.getElementById("createModal");
createModal.addEventListener("show.bs.modal", function (event) {
    // Button that triggered the modal
    var button = event.relatedTarget;
    // Extract info from data-bs-* attributes
    var id = button.getAttribute("data-bs-id");
    var name = button.getAttribute("data-bs-name");
    var price = button.getAttribute("data-bs-price");
    var quantity = button.getAttribute("data-bs-quantity");
    var origin = button.getAttribute("data-bs-origin");
    // If necessary, you could initiate an AJAX request here
    // and then do the updating in a callback.
    //
    // Update the modal's content.
    //   var modalTitle = createModal.querySelector('.modal-title')
    var modalBodyInputId = createModal.querySelector("#id");
    var modalBodyInputName = createModal.querySelector("#name");
    var modalBodyInputPrice = createModal.querySelector("#price");
    var modalBodyInputQuantity = createModal.querySelector("#quantity");
    var modalBodyInputOrigin = createModal.querySelector("#origin");

    //  modalTitle.textContent = 'New message to ' + recipient
    modalBodyInputId.value = id;
    modalBodyInputName.value = name;
    modalBodyInputPrice.value = price;
    modalBodyInputQuantity.value = quantity;
    modalBodyInputOrigin.value = origin;
});
