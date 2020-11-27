function segueToConversations() {
  const id = "XZDVCzIoQUg9OC7uQFowjflINAV2"
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("body").innerHTML =
      this.responseText;
      
    }
  };
  xhttp.open("GET", "conversations.html", true);
  xhttp.send();
}