function loadMessages(conversationId) {
    backendGetMessages(conversationId, function(result) {
      console.log(result)
      result.forEach(function(message) {
        let messageBox = document.createElement("P")
        messageBox.innerHTML = message.text
        document.querySelector("#list").appendChild(messageBox)
      })
      
    })
}