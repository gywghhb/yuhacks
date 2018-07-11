function showForm() {
  var form = document.getElementById("mailing-form-header");
  var button = document.getElementById("join-us-button");

  button.style.display = "none";
  form.style.display = "block";
  expand();
}

function expand() {
  var input = document.getElementById("mce-EMAIL");
  input.setAttribute("style", "width: 246px");
}