function getForm() {
  return {email: document.querySelector("#email").value, 
          password: document.querySelector("#psw").value}
}


function login() {
  backendLogin(getForm().email, getForm().password, function(success, error) {
    if (success) {
      if (document.getElementById("rememberMe").checked) {
        localStorage.setItem("email", getForm().email)
        localStorage.setItem("password", getForm().password)
      }
      segueToConversations(auth.currentUser.uid, getForm().email)
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


function checkForRememberMe() {
  if (localStorage.getItem("email") != null) {
    document.querySelector("#email").value = localStorage.getItem("email")
  }
  
  if (localStorage.getItem("password") != null) {
    document.querySelector("#psw").value = localStorage.getItem("password")
    
  }
}