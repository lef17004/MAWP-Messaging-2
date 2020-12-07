let lastMessageId


function loadMessages(conversationId, recieverId, senderEmail, recieverEmail) {
  
  //db.collection("conversations").doc(conversationId).onSnapshot(function(doc) {
    document.querySelector("#list").innerHTML = ""  
    document.querySelector("#reciever").innerHTML = recieverEmail
  
    backendGetMessages(conversationId, function(result) {
      let count = 0 
      result.forEach(function(message) {
        if (count != result.length - 1) {
          createMessage(message, recieverId)
        }
        count++
      })
      
      
      lastMessageId = result[result.length - 1].text
      console.log(result[result.length - 1])
      
      
      document.querySelector("#send").addEventListener("click", function(){
        send(conversationId, recieverId, senderEmail, recieverEmail) 
      })
      
      document.querySelector("#back").addEventListener("click", function(){
        console.log("back")
        
        segueToConversations(auth.currentUser.uid, senderEmail)
      })
      
      let unsubscribe;
      unsubscribe = db.collection("conversations").doc(conversationId).onSnapshot(function(doc) {
        backendGetLastMessage(conversationId, function(result) {
          
          //if (result[result.length - 1].text != lastMessageId) {
            createMessage(result[result.length - 1], recieverId)
            lastMessageId = result[result.length - 1].text
          //}
          
          
          
        })
      })
      unsubscribe()
    
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
  //loadMessages(conversationId, recieverId, senderEmail, recieverEmail)
}


function createMessage(message, recieverId) {
 
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