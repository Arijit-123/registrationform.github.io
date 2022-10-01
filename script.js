const checkingData = () => {
  let error = false;
  let pehlanaam = document.getElementById("firstName").value;
  let akhrinaam = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let confirmpassword = document.getElementById("confirm-password").value;
  let check = document.getElementById("invalidCheck").checked;
  console.log(pehlanaam, akhrinaam, email, password, confirmpassword, check);

  if (pehlanaam.length >= 3) {
    document.getElementById("Naam-sahi-hai").style.display = "block";
    document.getElementById("Naam-sahi-nai-hai").style.display = "none";
  } else {
    document.getElementById("Naam-sahi-hai").style.display = "none";
    document.getElementById("Naam-sahi-nai-hai").style.display = "block";
    error = true;
  }

  if (akhrinaam.length >= 3) {
    document.getElementById("lNaam-sahi-hai").style.display = "block";
    document.getElementById("lNaam-sahi-nai-hai").style.display = "none";
  } else {
    document.getElementById("lNaam-sahi-hai").style.display = "none";
    document.getElementById("lNaam-sahi-nai-hai").style.display = "block";
    error = true;
  }
  const regx = /^([a-zA-Z0-9])+@([a-z])+.([a-z])+.([a-z])+$/;
  if (email.match(regx) && email.indexOf("@") > 1) {
    document.getElementById("email-sahi-hai").style.display = "block";
    document.getElementById("email-sahi-nai-hai").style.display = "none";
  } else {
    document.getElementById("email-sahi-hai").style.display = "none";
    document.getElementById("email-sahi-nai-hai").style.display = "block";
    error = true;
  }

  const regx1 = /^([#@a-zA-Z0-9])+([#@a-zA-Z0-9])+([#@a-zA-Z0-9])+([#@a-zA-Z0-9])+([#@a-zA-Z0-9])+([#@a-zA-Z0-9])+([#@a-zA-Z0-9])+([#@a-zA-Z0-9])$/;//using general expression
  if (password.match(regx1) && password.length >= 8) {
    document.getElementById("password-sahi-hai").style.display = "block";
    document.getElementById("password-sahi-nai-hai").style.display = "none";
  } else {
    document.getElementById("password-sahi-hai").style.display = "none";
    document.getElementById("password-sahi-nai-hai").style.display = "block";
    error = true;
  }
   //putting condition to match password
  if (confirmpassword === password && confirmpassword.length >= 8) {
    document.getElementById("password-matched").style.display = "block";
    document.getElementById("password-not-matched").style.display = "none";
  } else {
    document.getElementById("password-matched").style.display = "none";
    document.getElementById("password-not-matched").style.display = "block";
    error = true;
  }
  if (check !== true) {
    document.getElementById("ch-invalid-msg").style.display = "block";
    error = true;
  } else {
    document.getElementById("ch-invalid-msg").style.display = "none";
  }

  setTimeout(() => {
    if (error === false) {
      alert("Your details save been saved successfully!");
      document.getElementById("firstName").value='';
      document.getElementById("lastName").value='';
      document.getElementById("email").value='';
      document.getElementById("password").value='';
      document.getElementById("confirm-password").value='';
      document.getElementById("invalidCheck").checked=false;

      document.getElementById("Naam-sahi-hai").style.display = "none";
      document.getElementById("lNaam-sahi-hai").style.display = "none";
      document.getElementById("email-sahi-hai").style.display = "none";
      document.getElementById("password-sahi-hai").style.display = "none";
      document.getElementById("password-matched").style.display = "none";
    }
  }, 1000);
};
