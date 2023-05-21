var exampleModal = document.getElementById("exampleModal");
exampleModal.addEventListener("show.bs.modal", function (event) {
    // Button that triggered the modal
    var button = event.relatedTarget;
    // Extract info from data-bs-* attributes
    var hoten = button.getAttribute("data-bs-hoten");
    var lop = button.getAttribute("data-bs-lop");
    var tuoi = button.getAttribute("data-bs-tuoi");
    // If necessary, you could initiate an AJAX request here
    // and then do the updating in a callback.
    //
    // Update the modal's content.
    //   var modalTitle = exampleModal.querySelector('.modal-title')
    var modalBodyInputHoten = exampleModal.querySelector("#hoten");
    var modalBodyInputLop = exampleModal.querySelector("#lop");
    var modalBodyInputTuoi = exampleModal.querySelector("#tuoi");

    //  modalTitle.textContent = 'New message to ' + recipient
    modalBodyInputHoten.value = hoten;
    modalBodyInputLop.value = lop;
    modalBodyInputTuoi.value = tuoi;
});
