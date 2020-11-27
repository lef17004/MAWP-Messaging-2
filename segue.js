function loadConversations() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("body").innerHTML =
      this.responseText;
      
      
      let p = document.createElement("BUTTON")
      p.innerHTML = "I am a P!"
      document.querySelector("#list").appendChild(p)
      
      
    }
  };
  xhttp.open("GET", "conversations.html", true);
  xhttp.send();
}