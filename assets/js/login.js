document.getElementById('login-form').onsubmit = function (e) {
  e.preventDefault();

  const usernameInput = document.getElementById('username').value;
  const passwordInput = document.getElementById('password').value;

  
  const storedUser = JSON.parse(localStorage.getItem('user'));

  if (
    storedUser &&
    usernameInput === storedUser.username &&
    passwordInput === storedUser.password
  ) {
    alert('Login bem-sucedido!');
    window.location.href = 'usuario.html';
  } else {
    alert('Usuário ou senha incorretos.');
  }
};

  
  