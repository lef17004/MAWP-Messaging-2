function segueToConversations(id) {
  
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("body").innerHTML =
      this.responseText;
      loadConversations(id)
    }
  };
  xhttp.open("GET", "conversations.html", true);
  xhttp.send();
}

function segueToMessages(conversationId, recieverId) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("body").innerHTML =
      this.responseText;
      loadMessages(conversationId, recieverId)
    }
  };
  xhttp.open("GET", "messages.html", true);
  xhttp.send();
}