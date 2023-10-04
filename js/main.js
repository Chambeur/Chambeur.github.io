var encEmail = "Y29udGFjdEB3ZWJkZXYtdW4uY29t";
const form = document.getElementById("email");
form.setAttribute("href", "mailto:".concat(atob(encEmail)));
