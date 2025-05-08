fetch('principaisCat.json')
  .then(res => res.json())
  .then(dados => {
    console.log(dados); 
    const lista = document.getElementById('lista-receitas');

    dados.categorias.forEach(categoria => {
      const categoriaSection = document.createElement('section');
      const categoriaTitle = document.createElement('h2');
      categoriaTitle.textContent = categoria.nome;
      categoriaSection.appendChild(categoriaTitle);

      const listaReceitas = document.createElement('ul');
      listaReceitas.classList.add('receitas'); 

      categoria.receitas.forEach(receita => {
        const li = document.createElement('li');
        li.innerHTML = `
          <strong>${receita.nome}</strong>
          <p><em>${receita.historia}</em></p>
          <p><strong>Ingredientes:</strong></p>
          <ul>${receita.ingredientes.map(ing => `<li>${ing}</li>`).join('')}</ul>
          <p><strong>Modo de Preparo:</strong> ${receita.modoPreparo}</p>
        `;
        listaReceitas.appendChild(li);
      });

      categoriaSection.appendChild(listaReceitas);
      lista.appendChild(categoriaSection);
    });
  })
  .catch(erro => console.error("Erro ao carregar receitas:", erro));
