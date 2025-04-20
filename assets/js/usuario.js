// Verifica se está logado
window.onload = function () {
  const username = localStorage.getItem('username');
  const password = localStorage.getItem('password');
  const savedImg = localStorage.getItem('profileImg');

  if (!username || !password) {
    window.location.href = 'login.html';
  }

  // Carregar imagem salva (se tiver)
  if (savedImg) {
    document.getElementById('profile-pic').src = savedImg;
  }
};

// Logout
document.getElementById('logout-btn').onclick = function () {
  localStorage.removeItem('username');
  localStorage.removeItem('password');
  localStorage.removeItem('profileImg');
  window.location.href = 'login.html';
};

// Trocar imagem de perfil
document.getElementById('upload-img').addEventListener('change', function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const imgData = e.target.result;
      document.getElementById('profile-pic').src = imgData;
      localStorage.setItem('profileImg', imgData); // Salva no localStorage
    };
    reader.readAsDataURL(file);
  }
});
