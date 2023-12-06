
document.querySelector('.login-form');
document.addEventListener('submit', loginFormHandler);

document.addEventListener('DOMContentLoaded', function() {
  const contentDiv = document.getElementById('content');
  const loginSource = document.getElementById('login-template').innerHTML;
  const userSource = document.getElementById('user-template').innerHTML;
  const loginTemplate = Handlebars.compile(loginSource);
  const userTemplate = Handlebars.compile(userSource);

  function renderLoginForm() {
    contentDiv.innerHTML = loginTemplate();
    document.getElementById('loginForm').addEventListener('submit', function(event) {
      event.preventDefault();

      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      if (username === 'user' && password === 'password') {
        const userData = {
          username: username,
          email: 'example@example.com'
        };
        renderUserInfo(userData);
      } else {
        contentDiv.innerHTML += 'Invalid credentials. Please try again.';
      }
    });
  }
  function renderUserInfo(userData) {
    contentDiv.innerHTML = userTemplate(userData);
  }
  renderLoginForm();
});