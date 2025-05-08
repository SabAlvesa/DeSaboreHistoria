 fetch('receitas.json')
  .then(res => res.json())
  .then(receitas => {
    const lista = document.getElementById('lista-receitas');
    receitas.forEach(receita => {
      const li = document.createElement('li');
      li.innerHTML = `
        <strong>${receita.nome}</strong>
        <p><em>${receita.historia}</em></p>
        <p><strong>Ingredientes:</strong></p>
        <ul>${receita.ingredientes.map(ing => `<li>${ing}</li>`).join('')}</ul>
        <p><strong>Modo de Preparo:</strong> ${receita.modoPreparo}</p>
      `;
      lista.appendChild(li);
    });
  })
  .catch(erro => console.error("Erro ao carregar receitas:", erro));
