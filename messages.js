

function loadMessages(conversationId, recieverId, senderEmail, recieverEmail) {
  
  //db.collection("conversations").doc(conversationId).onSnapshot(function(doc) {
    document.querySelector("#list").innerHTML = ""  
    console.log(senderEmail)
    console.log(recieverEmail)
    backendGetMessages(conversationId, function(result) {
      result.forEach(function(message) {
        console.log(message)
        let messageBox = document.createElement("DIV")
        let timeBox = document.createElement("DIV")
        
        messageBox.className = "container"
        
        
        
        messageBox.innerHTML = "<p>" + message.text + "</p>"
        timeBox.innerHTML = "M"
        
        if (recieverId == message.recieverId) {
          messageBox.className = "container darker"
        }
        else {
          messageBox.className = "container"
        }
        
  
        document.querySelector("#list").appendChild(messageBox)
      })
      
      document.querySelector("#send").addEventListener("click", function(){
        send(conversationId, recieverId, senderEmail, recieverEmail) 
      })
    })
//     <div class="container time">
//     <span class="time-right">11:02</span>
// </div>
    
  //});  
}




function send(conversationId, recieverId, senderEmail, recieverEmail) {
  const text = document.querySelector("#text").value
  if (text == "") {
    return
  }
  backendSendMessage(auth.currentUser.uid, recieverId, conversationId, text)
  
  document.querySelector("#text").value = ""
  loadMessages(conversationId, recieverId, senderEmail, recieverEmail)
}

