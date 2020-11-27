function startConversation() {
  
}

function loadConversations(id) {
   backendLoadConversations(id, function(result) {
      let conversation = document.createElement("Button")
      conversation.setAttribute("onclick", "signOut()")
      conversation.innerHTML = result.email
      document.querySelector("#list").appendChild(conversation)
      document.querySelector("#list").appendChild(document.createElement("br"))
    })
}