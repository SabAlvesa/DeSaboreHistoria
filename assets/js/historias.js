document.addEventListener('DOMContentLoaded', () => {
    fetch('historias.json')
      .then(response => {
        if (!response.ok) throw new Error(`Erro ao carregar JSON: ${response.status}`);
        return response.json();
      })
      .then(dados => {
        const container = document.getElementById('container-receitas');
        const categorias = {};
  
        // Agrupar por categoria
        dados.receitas.forEach(receita => {
          if (!categorias[receita.categoria]) {
            categorias[receita.categoria] = [];
          }
          categorias[receita.categoria].push(receita);
        });
  
        // Criar blocos por categoria
        for (const categoria in categorias) {
          const divCategoria = document.createElement('div');
          divCategoria.classList.add('categoria');
  
          const titulo = document.createElement('h2');
          titulo.textContent = categoria;
          divCategoria.appendChild(titulo);
  
          categorias[categoria].forEach(receita => {
            const divReceita = document.createElement('div');
            divReceita.classList.add('receita');
  
            // Imagem
            const imagem = document.createElement('img');
            imagem.src = receita.imagem;
            imagem.alt = receita.nome;
            divReceita.appendChild(imagem);
  
            // Texto
            const divTexto = document.createElement('div');
            divTexto.classList.add('texto');
  
            const nome = document.createElement('h3');
            nome.textContent = receita.nome;
  
            const historia = document.createElement('p');
            historia.classList.add('historia');
            historia.textContent = receita.historia;
  
            divTexto.appendChild(nome);
            divTexto.appendChild(historia);
  
            divReceita.appendChild(divTexto);
            divCategoria.appendChild(divReceita);
          });
  
          container.appendChild(divCategoria);
        }
      })
      .catch(error => {
        console.error('Erro ao carregar ou processar o JSON:', error);
      });
  });
  
  