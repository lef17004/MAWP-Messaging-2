

function loadMessages(conversationId, recieverId) {
  
  db.collection("conversations").doc(conversationId).onSnapshot(function(doc) {
    document.querySelector("#list").innerHTML = ""  
    
    backendGetMessages(conversationId, function(result) {
      result.forEach(function(message) {
        let messageBox = document.createElement("P")
        messageBox.innerHTML = message.text
        document.querySelector("#list").appendChild(messageBox)
      })
      
      document.querySelector("#send").addEventListener("click", function(){
        send(conversationId, recieverId) 
      })
    })
    
    
  });  
}




function send(conversationId, recieverId) {
  const text = document.querySelector("#text").value
  
  backendSendMessage(auth.currentUser.uid, recieverId, conversationId, text)
  
  document.querySelector("#text").value = ""
  db.collection("conversations").doc(conversationId).update({
          update: true
  })
}

