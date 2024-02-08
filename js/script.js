const subscribeButton = document.getElementById("subscribe-btn");
const dismissButton = document.getElementById("dismiss-btn");
const emailIn = document.getElementById("email-input");
const submittedEmail = document.getElementById("submitted-email");
const signupCard = document.querySelector(".sign-up-card");
const successCard = document.querySelector(".success-card");
const errorEmail = document.getElementById("error-email");

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

subscribeButton.addEventListener("click", function submitEmail(e) {
    e.preventDefault();

    if (validateEmail(emailIn.value)) {
        submittedEmail.innerHTML = emailIn.value;
        submittedEmail.style.fontWeight = "bold";
        signupCard.style.display = "none";
        successCard.style.display = "block";
    }
    else {
        errorEmail.innerHTML = "Valid email required";
        emailIn.style.borderColor = "hsl(4, 100%, 67%)";
        emailIn.style.backgroundColor = "#ffe0e0";
        emailIn.style.color = "hsl(4, 100%, 67%)";
    }
})

dismissButton.addEventListener("click", function toggleCard() {
    signupCard.style.display = "flex";
    successCard.style.display = "none";
    errorEmail.innerHTML = "";
    emailIn.style.borderColor = "hsl(231, 7%, 60%)";
    emailIn.style.backgroundColor = "white";
    emailIn.value = "";
})
