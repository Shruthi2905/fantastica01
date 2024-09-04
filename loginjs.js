// Get the username and password input fields
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

// Get the login form
const loginForm = document.getElementById('login-form');

// Add an event listener to the login form's submit event
loginForm.addEventListener('submit', (e) => {
  // Prevent the default form submission behavior
  e.preventDefault();

  // Get the username and password values
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  // Check if the username is "shruthi" and the password is "game_123"
  if (username === 'shruthi' && password === 'game_123') {
    // If the credentials are valid, redirect to the homepage
    window.location.href = 'homepage.html';
  } else {
    // If the credentials are invalid, display an error message
    alert('Invalid username or password');
  }
});
