function sayHello() {
  alert("Hello! You clicked the button.");
}

document.getElementById("hoverText").onmouseover = function () {
  this.style.color = "red";
};

document.getElementById("typeHere").onkeypress = function (event) {
  console.log("You pressed:", event.key);
};

function secretAction() {
  alert("You found the secret!");
}

function changeText() {
  document.getElementById("textToChange").textContent = "Text has changed!";
}

function showTab(tabNumber) {
  document.getElementById("tab1").classList.add("hidden");
  document.getElementById("tab2").classList.add("hidden");
  document.getElementById("tab" + tabNumber).classList.remove("hidden");
}

function validateForm(e) {
  e.preventDefault();
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let msg = "";

  if (!email.includes("@")) {
    msg = "Please enter a valid email.";
  } else if (password.length < 8) {
    msg = "Password must be at least 8 characters.";
  } else {
    msg = "Form submitted!";
  }

  document.getElementById("formMsg").textContent = msg;
}
