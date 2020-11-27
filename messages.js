

function loadMessages(conversationId, recieverId) {
    backendGetMessages(conversationId, function(result) {
      console.log(result)
      result.forEach(function(message) {
        let messageBox = document.createElement("P")
        messageBox.innerHTML = message.text
        document.querySelector("#list").appendChild(messageBox)
      })
      
      document.querySelector("#send").addEventListener("click", function(){
        send(recieverId)
      })
      
    })
}




function send(recieverId) {
  const text = document.querySelector("#send").value
  document.querySelector("#send").value = ""
  backendSendMessage(senderId, recieverId, conversationId, text)
}