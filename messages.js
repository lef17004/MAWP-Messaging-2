

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
        
        if (recieverId == result.recieverId)
        messageBox.className = "u1 chat"
  
        document.querySelector("#list").appendChild(messageBox)
      })
      
      document.querySelector("#send").addEventListener("click", function(){
        send(conversationId, recieverId) 
      })
    })
    
    
  //});  
}




function send(conversationId, recieverId) {
  const text = document.querySelector("#text").value
  
  backendSendMessage(auth.currentUser.uid, recieverId, conversationId, text)
  
  document.querySelector("#text").value = ""
  db.collection("conversations").doc(conversationId).update({
          update: true
  })
}

