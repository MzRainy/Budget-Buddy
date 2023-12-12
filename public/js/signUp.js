const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#username-signUp').value.trim();
    const email = document.querySelector('#email-signUp').value.trim();
    const password = document.querySelector('#password-signUp').value.trim();
  
    if ( name && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
          
      if (response.ok) {
        document.location.replace('/');
        alert('you did it');
      } else {
        alert('Failed to sign up.');
      }
    }
  };

  const signUpBtn = document.querySelector('#signUpBtn');
  signUpBtn.addEventListener('click', signupFormHandler);