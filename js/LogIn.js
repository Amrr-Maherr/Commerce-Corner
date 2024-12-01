// Selecting elements from the DOM related to the login form
let EmailInput = document.querySelector("#inputEmail");
let passwordInput = document.querySelector("#inputPassword");
let submit = document.querySelector("#submit"); 

// Retrieving user data stored in localStorage
let firstName = localStorage.getItem("FirstName");
let lastName = localStorage.getItem("LastName");
let password = localStorage.getItem("Password");
let Email = localStorage.getItem("Email");

// Function to handle user login
function handleUserLogin(e) {
  e.preventDefault(); // Prevent page reload when clicking the submit button

  // Check if the entered email and password match the stored ones
  if (
    EmailInput.value.toLowerCase() === Email && // Check if email matches
    passwordInput.value === password // Check if password matches
  ) {
    window.location = "index.html"; // Redirect to the homepage if login is successful
  } else if (
    EmailInput.value.toLowerCase() !== Email || // Check if email is incorrect
    passwordInput.value !== password // Check if password is incorrect
  ) {
    alert(
      "The email or password you entered is incorrect. Please check and try again." // Show error message if login fails
    );
  } else if (EmailInput.value.toLowerCase() !== Email) {
    alert(
      "The email you entered does not match our records. Please check and try again." // If email doesn't match
    );
  } else if (passwordInput.value !== password) {
    alert(
      "The password you entered is incorrect. Please double-check your password and try again." // If password doesn't match
    );
  }
}

// Adding an event listener to the submit button to trigger the login function when clicked
submit.addEventListener("click", handleUserLogin);

// Retrieving user data from localStorage again (for other functionalities)
let FirstName = localStorage.getItem("FirstName");
let LastName = localStorage.getItem("LastName");

// Selecting elements from the DOM related to buttons and other UI elements
let signInButton = document.querySelector(".signInBtn");
let logInButton = document.querySelector(".logInBtn");
let userNameIn = document.querySelector(".userNameIn");
let logOutBtn = document.querySelector(".logOutBtn");
let cartElement = document.querySelector(".cart"); // Cart element to hide when no user
let favProducts = document.querySelector(".favProducts");

// Function to check user status and update the UI accordingly
function checkUserStatus() {
  if (FirstName) {
    // If the user data exists in localStorage, the user is logged in
    userNameIn.textContent = `Welcome, ${FirstName} ${LastName}`; // Display the user's name
    signInButton.classList.add("d-none"); // Hide the sign-in button
    logInButton.classList.add("d-none"); // Hide the login button
    logOutBtn.classList.remove("d-none"); // Show the logout button
    cartElement.classList.remove("d-none"); // Show cart element
    favProducts.classList.remove("d-none"); // Show favorite products element
  } else {
    // If there is no user data in localStorage, the user is not logged in
    userNameIn.textContent = ""; // Clear the username display
    signInButton.classList.remove("d-none"); // Show the sign-in button
    logInButton.classList.remove("d-none"); // Show the login button
    logOutBtn.classList.add("d-none"); // Hide the logout button
    cartElement.classList.add("d-none"); // Hide the cart element
    favProducts.classList.add("d-none"); // Hide the favorite products element
  }
}

// Perform a check when the page loads to update the UI
checkUserStatus();
