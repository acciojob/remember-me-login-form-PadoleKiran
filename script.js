// //your JS code here. If required.
// let submit_btn = document.getElementById("existing");
// let username = document.getElementById("username");
// let password = document.getElementById("password");
// let checkbox = document.getElementById("checkbox");

// let localStroage = [];
// submit_btn.addEventListner("click",() => {
// 	if(username.length > 0 && password.length > 0){
// 		localStroage.push(username);
// 		localStroage.push(password);
// 	}
// 	alert(username + " " + password);
// });

(function () {
  const form = document.getElementById("login-form");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const rememberCheckbox = document.getElementById("checkbox");
  const existingBtn = document.getElementById("existing");

  function credsExist() {
    return localStorage.getItem("username") && localStorage.getItem("password");
  }

  function updateExistingVisibility() {
    existingBtn.style.display = credsExist() ? "block" : "none";
  }

  window.addEventListener("DOMContentLoaded", () => {
    // Ensure initial expectations: empty fields & unchecked checkbox
    usernameInput.value = "";
    passwordInput.value = "";
    rememberCheckbox.checked = false;
    updateExistingVisibility();
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value;

    alert(Logged in as ${username});

    if (rememberCheckbox.checked) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
    } else {
      localStorage.removeItem("username");
      localStorage.removeItem("password");
    }

    updateExistingVisibility();
  });

  existingBtn.addEventListener("click", () => {
    const savedUsername = localStorage.getItem("username");
    if (savedUsername) {
      alert(Logged in as ${savedUsername});
    }
  });
})();