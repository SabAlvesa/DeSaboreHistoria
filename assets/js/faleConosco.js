document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form-contato');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault(); // Evita o envio real
  
      // Captura os dados (opcional)
      const nome = form.nome.value;
      const email = form.email.value;
      const mensagem = form.mensagem.value;
  
      // Exibe uma confirmação (pode ser substituído por envio real)
      alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);
  
      // Limpa os campos
      form.reset();
    });
  });
  