var usernameLogin = document.querySelector(".username-user");
function signup(e) {
  event.preventDefault();
  console.log("working again!");

  var fullname = document.getElementById("fullname").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  var user = {
    fullname: fullname,
    email: email,
    password: password,
  };

  var json = JSON.stringify(user);
  localStorage.setItem(user, json);
  console.log("user added");
}

function loginFunc(e) {
  event.preventDefault(); // Use the event parameter here
  var fullname = document.getElementById("login-email").value;
  console.log(fullname);
  var password = document.getElementById("login-password").value;
  console.log(password);

  // Retrieve the data from localStorage using the key "email"
  var user = localStorage.getItem("[object Object]"); // Use the correct key "user" to retrieve data
  var data = JSON.parse(user);
  console.log(data);

  // if (
  //   (fullname === null && fullname === "") ||
  //   (password === null && password === "")
  // ) {
  //   alert("Pease Enter login and password");
  // } else if (fullname === data.email && password === data.password) {
  //   alert("you have successfully logged in!");
  //   // console.log(data.fullname);
  //   // usernameLogin = document.textContent(data.fullname);
  //   // usernameLogin.style.display = "block";
  //   console.log(data.fullname);
  //   usernameLogin.innerHTML = data.fullname; // Set the text content of usernameLogin
  //   usernameLogin.style.display = "block";
  // } else {
  //   alert("Please provide correct info!");
  // }
  const startButton = document.getElementById("start-btn");
  const loginMessage = document.getElementById("login-message");
  if (fullname === data.email && password === data.password) {
    startButton.style.display = "block";
    loginMessage.style.display = "none";
    alert("you have successfully logged in!");
    console.log(data.fullname);

    // Create a new <a> element
    var userLink = document.createElement("a");
    userLink.href = "#"; // Set the href attribute
    userLink.textContent = "Welcome, " + data.fullname + "  "; // Set the text content

    // Create a <button> element and append it to the <a> element
    // var userButton = document.createElement("button");
    // userButton.className = "btnLogin-popup";
    // userButton.textContent = "Logout";
    // userLink.appendChild(userButton);
    var userButton = document.createElement("button");
    userButton.className = "btnLogin-popup";
    userButton.textContent = "Logout";
    userButton.addEventListener("click", function () {
      // Add a click event listener to the "Logout" button
      alert("Successfully logged out!!!");
      location.reload(); // Reload the page
    });
    userLink.appendChild(userButton);

    // Add the new <a> element to the "user-profile" div
    var userProfileDiv = document.getElementById("user-profile");
    userProfileDiv.innerHTML = ""; // Clear any previous content
    userProfileDiv.appendChild(userLink);

    // Hide the login button
    var loginButton = document.querySelector(".btnLogin-popup");
    if (loginButton) {
      loginButton.style.display = "none";
    }
  } else {
    alert("Please provide correct info!");
  }
}
