function startConversation() {
  const recieverEmail = prompt("Email: ")
  
}

function loadConversations(id) {
   backendLoadConversations(id, function(result) {
      let conversation = document.createElement("Button")
      conversation.addEventListener("click", function(){
        segueToMessages(result.conversationId, result.recieverId)
      })
      conversation.innerHTML = result.email
      document.querySelector("#list").appendChild(conversation)
      document.querySelector("#list").appendChild(document.createElement("br"))
    })
}