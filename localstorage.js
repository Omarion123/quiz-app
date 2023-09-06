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
  var user = localStorage.getItem("user"); // Use the correct key "user" to retrieve data
  var data = JSON.parse(user);
  console.log(data);

  if (
    (fullname === null && fullname === "") ||
    (password === null && password === "")
  ) {
    alert("Pease Enter login and password");
  } else if (fullname === data.email && password === data.password) {
    alert("you have successfully logged in!");
  } else {
    alert("Please provide correct info!");
  }
}
