function loadConversations() {
  const id = "XZDVCzIoQUg9OC7uQFowjflINAV2"
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("body").innerHTML =
      this.responseText;
      
      backendLoadConversations(id, function(result) {
        let conversation = document.createElement("Button")
        conversation.innerHTML = result.email
        document.querySelector("#list").appendChild(conversation)
        document.querySelector("#list").appendChild(document.createElement("br"))
        
      })
      
      
      
      
      
    }
  };
  xhttp.open("GET", "conversations.html", true);
  xhttp.send();
}