function validateForm() {
    var firstName = document.getElementById("first_name").value;
    var lastName = document.getElementById("last_name").value;
    var email = document.getElementById("email").value;
    var country = document.getElementById("country").value;
    var errorMessage = "";
  
   
    if (firstName === "") {
      errorMessage += "First Name is required.<br>";
      document.getElementById("first_name_error").innerHTML = "Required";
    } else {
      document.getElementById("first_name_error").innerHTML = "";
    }
  
   
    if (lastName === "") {
      errorMessage += "Last Name is required.<br>";
      document.getElementById("last_name_error").innerHTML = "Required";
    } else {
      document.getElementById("last_name_error").innerHTML = "";
    }
  
   
    if (email === "") {
      errorMessage += "Email is required.<br>";
      document.getElementById("email_error").innerHTML = "Required";
    } else {
      document.getElementById("email_error").innerHTML = "";
    }
  
    if (country === "") {
      errorMessage += "Country is required.<br>";
      document.getElementById("country_error").innerHTML = "Required";
    } else {
      document.getElementById("country_error").innerHTML = "";
    }
  
    if (errorMessage !== "") {
      document.getElementById("success_message").innerHTML = "";
      return false;
    } else {
      document.getElementById("success_message").innerHTML = "Form submitted successfully!";
      document.getElementById("success_message").style.display = "block";
      return true;
    }
  }
  