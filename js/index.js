var ws, modal;

function selectRole(){
    document.getElementById("formConnection").action = document.getElementById("jobSelect").value+'.html';
}

function loadFile(event) {
    var output = document.getElementById('output');
    var avatar = URL.createObjectURL(event.target.files[0]);
    output.src = avatar;
};

window.onload = function () {
// Get the modal
    modal = document.getElementById('modalConnection');

// Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
    modal.style.display = "block";

    span.onclick = function() {
        modal.style.display = "none";
    }
};
