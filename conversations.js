function startConversation() {
  const recieverEmail = prompt("Email: ")
  backendCreateConversation(auth.currentUser.uid, recieverEmail, function(success) {
    segueToConversations(auth.currentUser.uid)
  })
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