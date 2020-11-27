

function loadMessages(conversationId, recieverId) {
    backendGetMessages(conversationId, function(result) {
      console.log(result)
      result.forEach(function(message) {
        let messageBox = document.createElement("P")
        messageBox.innerHTML = message.text
        document.querySelector("#list").appendChild(messageBox)
      })
      
      document.querySelector("#send").addEventListener("click", function(){
        send(conversationId, recieverId)
        db.collection("conversations").doc(conversationId).update({
          update: false
        })
      })
      
    })
}




function send(conversationId, recieverId) {
  const text = document.querySelector("#text").value
  document.querySelector("#text").value = ""
  
  backendSendMessage(auth.currentUser.uid, recieverId, conversationId, text)
}

db.collection("conversations").doc("IGajVQWy15gTxiFtaZ2HdlRo4Cx1XZDVCzIoQUg9OC7uQFowjflINAV2")
        .onSnapshot(function(doc) {
            console.log("Current data: ", doc.data());
        });