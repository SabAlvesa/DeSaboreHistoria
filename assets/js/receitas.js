fetch('receitas.json')
  .then(res => res.json())
  .then(receitas => {
    const lista = document.getElementById('lista-receitas');
    receitas.forEach(receita => {
      const div = document.createElement('div');
      div.classList.add('receita');
      div.innerHTML = `
        <h3>${receita.nome}</h3>
        <img src="${receita.imagem}" alt="Imagem da receita ${receita.nome}" class="imagem-receita">
        <p class="historia">${receita.historia}</p>
        <p><strong>Ingredientes:</strong></p>
        <ul>${receita.ingredientes.map(ing => `<li>${ing}</li>`).join('')}</ul>
        <p><strong>Modo de Preparo:</strong> ${receita.modoPreparo}</p>
        <a href="historia.html?nome=${encodeURIComponent(receita.nome)}" class="link-historia">Veja a história</a>
      `;
      lista.appendChild(div);
    });
  })
  .catch(erro => console.error("Erro ao carregar receitas:", erro));


