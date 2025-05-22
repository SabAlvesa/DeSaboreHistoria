const API_KEY = '541c5d48ce53471293286efa4bd4cb57'; 
const url = `https://newsapi.org/v2/everything?q=nutrição receitas&language=pt&sortBy=publishedAt&apiKey=${API_KEY}`;

async function fetchNews() {
  try {
    const res = await fetch(url);
    const data = await res.json();

    if (data.status !== 'ok') {
      throw new Error('Erro ao buscar notícias');
    }

    const newsContainer = document.getElementById('container-news');
    if (!newsContainer) {
      console.error('Elemento #container-news não encontrado');
      return;
    }

    newsContainer.innerHTML = ''; 

    data.articles.forEach(article => {
      const card = document.createElement('div');
      card.className = 'card';

      card.innerHTML = `
        <img src="${article.urlToImage || 'https://via.placeholder.com/300x180?text=No+Image'}" alt="${article.title}" />
        <div class="card-content">
          <h2 class="card-title">${article.title}</h2>
          <p class="card-description">${article.description || ''}</p>
          <a class="card-link" href="${article.url}" target="_blank" rel="noopener noreferrer">Leia mais</a>
        </div>
      `;

      newsContainer.appendChild(card);
    });

  } catch (error) {
    console.error('Erro:', error);
    const newsContainer = document.getElementById('container-news');
    if (newsContainer) {
      newsContainer.innerHTML = '<p>Não foi possível carregar as notícias.</p>';
    }
  }
}

document.addEventListener('DOMContentLoaded', fetchNews);

