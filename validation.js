const password1 = document.getElementById("password");
const password2 = document.getElementById("Confirm Password");
const form = document.querySelector("form");

// function validatePassword() {
//     const password = password1.value;
//     const requirement = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
//     return requirement.test(password.value);
// }

function passwordMatch() {
    const password = password1.value;
    const confirmPassword = password2.value;
    if (password !== confirmPassword) {
      document.getElementById("confirm-password-error").textContent =
        "Passwords do not match";
      return false;
    } else {
      document.getElementById("confirm-password-error").textContent = "";
      return true;
    }
}

function validateUsername() {
    const username = document.getElementById("username");
    const requirement = /^[a-zA-Z][a-zA-Z0-9]{2,}$/;
    return requirement.test(username.value);
}

document.getElementById("username").addEventListener("input", function (ev) {
    let userInput = ev.currentTarget;
    let Username = userInput.value;

    if (Username.length >= 3 && /^[a-zA-Z]/.test(Username)) {
        userInput.classList.add("valid-text");
        userInput.classList.remove("invalid-text");
    } else {
        userInput.classList.add("invalid-text");
        userInput.classList.remove("valid-text");
    }
});

document.getElementById("Email").addEventListener("input",function (ev) {
    let userInput = ev.currentTarget;
    let Email = userInput;
    if (userInput.checkValidity() == false ) {
        Email.classList.add("invalid-text");
        Email.classList.remove("valid-text");
    } else {
        Email.classList.add("valid-text");
        Email.classList.remove("invalid-text");
    }
});

document.getElementById("password").addEventListener("input",function (ev) {
    let userPassword = ev.currentTarget;
    let Password = userPassword.value;
    const requirement = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if(requirement.test(Password)) {
        userPassword.classList.add("valid-text");
        userPassword.classList.remove("invalid-text");
       
    } else {
        userPassword.classList.add("invalid-text");
        userPassword.classList.remove("valid-text");
       
    }

});

document.getElementById("Confirm Password").addEventListener("input",function (ev) {
    let userPassword = ev.currentTarget;
    let Password = userPassword.value;
    
    if(password2 == password1) {
        userPassword.classList.add("valid-text");
        userPassword.classList.remove("invalid-text");
       
    } else {
        userPassword.classList.add("invalid-text");
        userPassword.classList.remove("valid-text");
       
    }
    passwordMatch();

});