 const banners = document.querySelectorAll('.banner');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const bannerLink = document.getElementById('banner-link');

    const links = [
      "https://www.youtube.com/shorts/0o56oX241SI",
      "https://gymchef.com.br/marmita-low-carb2",
      "https://www.em.com.br/colunistas/carolina-figueira/2024/09/6941491-gourmet-x-artesanal-o-que-realmente-estamos-comendo.html"
    ];

    let current = 0;

    function showBanner(index) {
      banners.forEach((banner, i) => {
        banner.classList.remove('active');
        if (i === index) banner.classList.add('active');
      });

      bannerLink.href = links[index];
    }

    prevBtn.addEventListener('click', () => {
      current = (current - 1 + banners.length) % banners.length;
      showBanner(current);
    });

    nextBtn.addEventListener('click', () => {
      current = (current + 1) % banners.length;
      showBanner(current);
    });

   
    showBanner(current);

