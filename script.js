const form = document.getElementById('signup-form');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const username = form.elements.username.value;
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  const confirmPassword = form.elements['confirm-password'].value;
  
  if (password !== confirmPassword) {
    errorMessage.textContent = 'Passwords do not match';
    return;
  }
  
  // Send data to server
  const data = { username, email, password };
  fetch('https://example.com/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    window.location.href = 'dashboard.html';
  })
  .catch(error => {
    errorMessage.textContent = 'Failed to sign up';
  });
});
