function getForm() {
  return {email: document.querySelector("#email").value, 
          password: document.querySelector("#password").value}
}


function login() {
  backendLogin(getForm().email, getForm().password, function(success, error) {
    if (success) {
      segueToConversations(auth.currentUser.uid)
    }
    else {
      alert(error)
    }
  })
}

function signup() {
  backendSignup(getForm().email, getForm().password, function(success, error) {
    if (success) {
      login()
    }
    else {
      alert(error)
    }
  })
}