function converter() {
    let ingrediente = document.getElementById('ingrediente').value;
    let quantidade = document.getElementById('quantidade').value;
    let unidade1 = document.getElementById('unidade1').value;
    let unidade2 = document.getElementById('unidade2').value;
    let resultado = document.getElementById('resultado');

    if (quantidade === "") {
        resultado.innerText = "Por favor, insira uma quantidade.";
        return;
    }

    quantidade = parseFloat(quantidade);

    let conversaoIngredientes = {
        "acucar": {
            "colherDeCha": 5, 
            "colherDeSopa": 15, 
            "copoAmericano": 200, 
            "xicaraDeCha": 160 
        },
        "fuba": {
            "colherDeCha": 6, 
            "colherDeSopa": 18, 
            "copoAmericano": 180, 
            "xicaraDeCha": 150 
        },
        "farinha": {
            "colherDeCha": 5, 
            "colherDeSopa": 15, 
            "copoAmericano": 120, 
            "xicaraDeCha": 100 
        },
        "aveia": {
            "colherDeCha": 5, 
            "colherDeSopa": 15, 
            "copoAmericano": 90, 
            "xicaraDeCha": 80 
        }
    };

   
    const nomesMedidas = {
        colherDeCha: "colher de chá",
        colherDeSopa: "colher de sopa",
        copoAmericano: "copo americano",
        xicaraDeCha: "xícara de chá",
        grama: "grama",
        quilograma: "quilograma"
    };

    if (conversaoIngredientes[ingrediente] && conversaoIngredientes[ingrediente][unidade1] && conversaoIngredientes[ingrediente][unidade2]) {
        let valorPorUnidade1 = conversaoIngredientes[ingrediente][unidade1];
        let valorPorUnidade2 = conversaoIngredientes[ingrediente][unidade2];

        let valorEmGramasOuMl = quantidade * valorPorUnidade1;
        let resultadoValor = valorEmGramasOuMl / valorPorUnidade2;

     
        const nomeLegivel = nomesMedidas[unidade2] || unidade2;

        resultado.innerText = `Resultado: ${resultadoValor.toFixed(2)} ${nomeLegivel}${resultadoValor > 1 ? 's' : ''}`;
    } else {
        resultado.innerText = "Conversão não suportada para estas unidades ou ingrediente.";
    }
}



