function startConversation() {
  const recieverEmail = prompt("Email: ")
  backendCreateConversation(auth.currentUser.uid, recieverEmail, function(success) {
    segueToConversations(auth.currentUser.uid)
  })
}

function loadConversations(id) {
   backendLoadConversations(id, function(result) {
      // let conversation = document.createElement("Button")
      // conversation.addEventListener("click", function(){
      //   segueToMessages(result.conversationId, result.recieverId)
      // })
      // conversation.innerHTML = result.email
      // document.querySelector("#list").appendChild(conversation)
      // document.querySelector("#list").appendChild(document.createElement("br"))
     
     let conv = document.createElement("DIV")
     conv.className = "d-flex bd-highlight"
     
     let lev2 = document.createElement("DIV")
     lev2.className = "img_cont"
     
     let image = document.createElement("IMG")
     image.src = "https://i.pinimg.com/564x/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg"
     image.className = "rounded-circle user_img"
     
     let span1 = document.createElement("SPAN")
     span1.className = "online_icon"
     
     let userInfo = document.createElement("DIV")
     userInfo.className = "user_info"
     
     let span2 = document.createElement("SPAN")
     span2.innerHTML = result.email
     
     let p = document.createElement("P")
     p.innerHTML = "Online __ Minutes ago"
     
     
     let link = document.createElement("A")
     let list = document.createElement("LI")
     
     userInfo.appendChild(span2)
     userInfo.appendChild(p)
     
     lev2.appendChild(image)
     lev2.appendChild(span1)
     
     conv.appendChild(lev2)
     conv.appendChild(userInfo)
     link.appendChild(conv)
     list.appendChild(link)
     document.querySelector("#list").appendChild(list)
     
    })
}


// <div class="d-flex bd-highlight">
//           <div class="img_cont">
//             <img
//               src="https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
//               class="rounded-circle user_img"
//             />
//             <span class="online_icon"></span>
//           </div>
//           <div class="user_info">
//             <span>Ya Boi</span>
//             <p>Ya Boi is online</p>
//           </div>
//         </div>