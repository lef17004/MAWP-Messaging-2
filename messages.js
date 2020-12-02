

function loadMessages(conversationId, recieverId, senderEmail, recieverEmail) {
  
  //db.collection("conversations").doc(conversationId).onSnapshot(function(doc) {
    document.querySelector("#list").innerHTML = ""  
    console.log(senderEmail)
    console.log(recieverEmail)
    backendGetMessages(conversationId, function(result) {
      result.forEach(function(message) {
        console.log(message)
        let messageBox = document.createElement("SPAN")
        
        messageBox.innerHTML = message.text
        
        if (recieverId == result.recieverId) {
          messageBox.className = "u1 chat"
        }
        else {
          messageBox.className = "u2 chat"
        }
        
  
        document.querySelector("#list").appendChild(messageBox)
      })
      
      document.querySelector("#send").addEventListener("click", function(){
        send(conversationId, recieverId, senderEmail, recieverEmail) 
      })
    })
    
    
  //});  
}




function send(conversationId, recieverId, senderEmail, recieverEmail) {
  const text = document.querySelector("#message").value
  if (text == "") {
    return
  }
  backendSendMessage(auth.currentUser.uid, recieverId, conversationId, text)
  
  document.querySelector("#text").value = ""
  loadMessages(conversationId, recieverId, senderEmail, recieverEmail)
}

