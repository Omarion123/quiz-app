console.log("omar");
function validateForm() {
  var emailInput = document.querySelector('input[type="email"]');
  var passwordInput = document.querySelector('input[type="password"]');

  if (emailInput.value === "" || passwordInput.value === "") {
    alert("Please enter both email and password.");
    return false; // Prevent form submission
  }

  // If validation passes, the form will be submitted
  return true;
}
