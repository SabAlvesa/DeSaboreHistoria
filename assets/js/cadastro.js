document.getElementById('signup-form').onsubmit = function (e) {
  e.preventDefault();

  const fullname = document.getElementById('fullname').value;
  const email = document.getElementById('email').value;
  const username = document.getElementById('username').value;
  const age = parseInt(document.getElementById('age').value);
  const password = document.getElementById('password').value;

  // Validação de idade 
  if (isNaN(age) || age < 18) {
    alert('Você deve ter 18 anos ou mais para se cadastrar.');
    return;
  }


  const userData = {
    fullname,
    email,
    username,
    age,
    password
  };

  localStorage.setItem('user', JSON.stringify(userData));


  window.location.href = 'usuario.html';
};

  