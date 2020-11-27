function loadMessages(conversationId) {
    backendGetMessages(conversationId, function(result) {
      console.log(result)
    })
}