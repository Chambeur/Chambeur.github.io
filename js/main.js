function displayEmail(e) {
  $("#email").html(" marc" + ".chamberlin" + "@gmail.com");
  e.preventDefault();
}

$("#email").click(displayEmail);
