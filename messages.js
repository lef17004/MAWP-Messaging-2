

function loadMessages(conversationId, recieverId, senderEmail, recieverEmail) {
  
  //db.collection("conversations").doc(conversationId).onSnapshot(function(doc) {
    document.querySelector("#list").innerHTML = ""  
    document.querySelector("#reciever").innerHTML = recieverEmail
    console.log(senderEmail)
    console.log(recieverEmail)
    backendGetMessages(conversationId, function(result) {
      result.forEach(function(message) {
        createMessage(message, recieverId)
      })
      
      console.log(result[result.length - 1])
      
      
      document.querySelector("#send").addEventListener("click", function(){
        send(conversationId, recieverId, senderEmail, recieverEmail) 
      })
      
      document.querySelector("#back").addEventListener("click", function(){
        segueToConversations(auth.currentUser.uid, senderEmail)
      })
      
      
      db.collection("conversations").doc(conversationId).onSnapshot(function(doc) {
        backendGetMessages(conversationId, function(result) {
          createMessage(result[result.length - 1], recieverId)
        })
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


function createMessage(message, recieverId) {
  console.log(message)
        let messageBox = document.createElement("DIV")
        let timeBox = document.createElement("DIV")
        
        messageBox.className = "container"
        timeBox.className = "container time"
        
        let hours = message.time.getHours() + 1
        let endStamp = " AM"
        
        if (hours > 12) {
          hours -= 12
          endStamp = " PM"
        }
        
        let time = hours + ":" + (message.time.getMinutes() + 1) + endStamp
        
        
        
        messageBox.innerHTML = "<p>" + message.text + "</p>"
        
        
        if (recieverId == message.recieverId) {
          messageBox.className = "container darker"
          timeBox.innerHTML = "<span class='time-right'>"+ time + "</span>"
        }
        else {
          messageBox.className = "container"
          timeBox.innerHTML = "<span class='time-left'>"+ time + "</span>"
        }
        
      
        document.querySelector("#list").appendChild(messageBox)
        document.querySelector("#list").appendChild(timeBox)
}