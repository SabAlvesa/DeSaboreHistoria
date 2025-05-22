window.onload = function () {
  
  const user = JSON.parse(localStorage.getItem('user'));

  if (!user) {
   
    window.location.href = 'login.html';
    return;
  }

 
  document.getElementById('user-fullname').textContent = user.fullname;
  document.getElementById('user-email').textContent = user.email;
  document.getElementById('user-username').textContent = user.username;
  document.getElementById('user-age').textContent = user.age;


  const savedImg = localStorage.getItem('profileImg');
  if (savedImg) {
    document.getElementById('profile-pic').src = savedImg;
  }

 
  const tabs = document.querySelectorAll('.tab');
  const contents = document.querySelectorAll('.tab-content');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById(tab.dataset.tab).classList.add('active');
    });
  });

 
  document.getElementById('upload-img').addEventListener('change', function () {
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const imgData = e.target.result;
        document.getElementById('profile-pic').src = imgData;
        localStorage.setItem('profileImg', imgData);
      };
      reader.readAsDataURL(file);
    }
  });


  document.getElementById('logout-btn').addEventListener('click', function (e) {
    e.preventDefault();
    localStorage.removeItem('user');
    localStorage.removeItem('profileImg');
    window.location.href = 'login.html';
  });
};
