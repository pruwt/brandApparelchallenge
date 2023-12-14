function validateEmail(){
  let emailaddress = document.getElementById("email").value; //gets the value of the email input field

  // regex for valid email format 
  let emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailregex.test(emailaddress)){
alert("Email sent!")
  }
  else{
    alert("Invalid email")
  }
}