// Select buttons
const signUpBtn = document.querySelector(".btn1");
const signInBtn = document.querySelector(".btn2");

// Sign Up handler
signUpBtn.addEventListener("click", (event) => {
  event.preventDefault(); // 👈 Prevent form submission

  const fullName = document.getElementById("fullname").value.trim();
  const email = document.getElementById("email").value.trim();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const repeatPassword = document.getElementById("repeat").value.trim();
  const termsChecked = document.getElementById("terms").checked;

  if (!termsChecked) {
    alert("You must agree to the Terms of User.");
    return;
  }

  if (password !== repeatPassword) {
    alert("Passwords do not match.");
    return;
  }

  const userData = {
    fullName,
    email,
    username,
    password,
  };

  // Save to localStorage
  localStorage.setItem("fureverUser", JSON.stringify(userData));

  alert("Sign up successful! Redirecting to home...");

  // Redirect to homepage
  window.location.href = "index.html";
});

// Sign In handler
signInBtn.addEventListener("click", (event) => {
  event.preventDefault(); // 👈 Prevent form submission

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  const storedUser = JSON.parse(localStorage.getItem("fureverUser"));

  if (!storedUser) {
    alert("No user found. Please sign up first.");
    return;
  }

  if (email === storedUser.email && password === storedUser.password) {
    alert("Login successful! Redirecting to home...");
    window.location.href = "index.html"; // Optional redirect on login
  } else {
    alert("Invalid credentials. Please try again.");
  }
});
