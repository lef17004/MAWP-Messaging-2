

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
        
        
        let time = firebase.firestore.Timestamp.fromDate(message.time)
        time = time.getUTCHours();
        
        
        
        messageBox.innerHTML = "<p>" + message.text + "</p>"
        timeBox.innerHTML = "<span>"+ time + "</span>"
        
        if (recieverId == message.recieverId) {
          messageBox.className = "container darker"
          timeBox.className = "time-right"
        }
        else {
          messageBox.className = "container"
          timeBox.className = "time-left"
        }
        
      
        document.querySelector("#list").appendChild(messageBox)
        document.querySelector("#list").appendChild(timeBox)
      })
      
      document.querySelector("#send").addEventListener("click", function(){
        send(conversationId, recieverId, senderEmail, recieverEmail) 
      })
    })

    
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

