function buscarNutricionais(ingrediente) {
    const url = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${ingrediente}&search_simple=1&action=process&json=1`;
  
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data); // Verifique o que está sendo retornado da API
  
        const produtos = data.products; // Array de produtos
        if (produtos.length === 0) {
          console.log("Produto não encontrado");
          return; // Se não encontrar nenhum produto, retornamos
        }
  
        const produto = produtos[0]; // Pegamos o primeiro produto encontrado
        const nutrientes = produto.nutriments;
  
        document.getElementById("info-nutricao").innerHTML = `
          <h3>${produto.product_name}</h3>
          <p><strong>Calorias:</strong> ${nutrientes["energy-kcal_100g"] || 'N/D'} kcal</p>
          <p><strong>Carboidratos:</strong> ${nutrientes.carbohydrates_100g || 'N/D'} g</p>
          <p><strong>Proteínas:</strong> ${nutrientes.proteins_100g || 'N/D'} g</p>
          <p><strong>Gorduras:</strong> ${nutrientes.fat_100g || 'N/D'} g</p>
          <p><strong>Sódio:</strong> ${nutrientes.sodium_100g || 'N/D'} g</p>
        `;
      })
      .catch(err => {
        console.error("Erro ao buscar os dados:", err);
      });
  }
  
  