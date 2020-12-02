

function loadMessages(conversationId, recieverId) {
  
  db.collection("conversations").doc(conversationId).onSnapshot(function(doc) {
    document.querySelector("#list").innerHTML = ""  
    
    backendGetMessages(conversationId, function(result) {
      result.forEach(function(message) {
        let messageBox = document.createElement("SPAN")
        messageBox.className = "u1 chat"
        messageBox.innerHTML = message.text
        
        let list = document.createElement("LI")
        list.appendChild(messageBox)
        
        document.querySelector("#list").appendChild(list)
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

