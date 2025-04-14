
window.onload = function () {
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
  
    if (storedUsername && storedPassword) {
      
      window.location.href = 'usuario.html';  
    }
  };
  
 
  document.getElementById('login-form').onsubmit = function (e) {
    e.preventDefault(); 
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    
    if (username === 'Sabrina123' && password === 'verde@s123') {
      
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
  
      
      window.location.href = 'usuario.html';
    } else {
      alert('Usuário ou senha incorretos');
    }
  };
  
  