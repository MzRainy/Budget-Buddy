const loginFormHandler = async (event) => {
  // Stop the browser from submitting the form so we can do so with JavaScript
  event.preventDefault();
  
document.querySelector('.login-form')
document.addEventListener('submit', loginFormHandler);
  
  document.addEventListener('DOMContentLoaded', function() {
    const contentDiv = document.getElementById('content');
    const loginSource = document.getElementById('login-template').innerHTML;
    const userSource = document.getElementById('user-template').innerHTML;

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
        function renderUserInfo(userData) {
          contentDiv.innerHTML = userTemplate(userData);
        }
        renderUserInfo(userData);
      } else {
        contentDiv.innerHTML += '<p>Invalid credentials. Please try again.<p>';
      }
    });
  }
  renderLoginForm();
});