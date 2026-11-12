document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission
  let email=document.getElementById("email").value.trim();
  let password=document.getElementById("password").value.trim();
  let emailError=document.getElementById("emailError");
  let passwordError=document.getElementById("passwordError");
  emailError.innerHTML="";
  passwordError.innerHTML="";
  let valid=true;
  let emailPattern=/^[^]+@[^]+\.[a-z]{2,3}$/;
  if (email==""){
    emailError.innerHTML="Email is required";
    valid=false;

  }
  else if(
    ! emailPattern.test(email)
  ){
    emailError.innerHTML="invalid  email id";
    valid=false;

  }
  if(password==""){
    passwordError.innerHTML="password is required ";
    valid=false;
  }
  else if(password.length<6){
    passwordError.innerHTML="password must be atleast 6 characters ";
    valid=false;

  }
  if(valid){
    alert("Login successfully")
  }

});