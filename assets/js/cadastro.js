document.getElementById('signup-form').onsubmit = function (e) {
    e.preventDefault(); 
  
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    
    localStorage.setItem('fullname', fullname);
    localStorage.setItem('email', email);
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
  

    window.location.href = 'usuario.html'; 
  };
  