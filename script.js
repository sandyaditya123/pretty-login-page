const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");

  resetErrors([emailInput, passwordInput], [emailError, passwordError]);

  let isValid = true;

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailInput.value.trim() === "") {
    showError(emailInput, emailError, "Email cannot be empty");
    isValid = false;
  } else if (!emailPattern.test(emailInput.value)) {
    showError(emailInput, emailError, "Please enter a valid email address");
    isValid = false;
  }

  if (passwordInput.value.length < 8) {
    showError(passwordInput, passwordError, "Password must be at least 8 characters");
    isValid = false;
  }

  if (isValid) {
    alert("Login successful");
    loginForm.reset();
  }
});

function showError(input, errorElement, message) {
  input.classList.add("invalid");
  errorElement.innerText = message;
}

function resetErrors(inputs, errorElements) {
  inputs.forEach((input) => input.classList.remove("invalid"));
  errorElements.forEach((el) => {
    el.innerText = "";
  });
}
