document.addEventListener('DOMContentLoaded', function() {
    const formularioLogin = document.getElementById('formulario-login');
    const campoEmail = document.getElementById('email');
    const erroEmail = document.getElementById('erro-email');
  
    function validarEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    }
  
    campoEmail.addEventListener('input', function() {
      if (!validarEmail(campoEmail.value)) {
        campoEmail.classList.add('erro');
      } else {
        campoEmail.classList.remove('erro');
      }
    });
  
    formularioLogin.addEventListener('submit', function(evento) {
      evento.preventDefault(); // Impede o envio padrão do formulário
      const email = campoEmail.value;
      let formularioValido = true;
  
      if (!validarEmail(email)) {
        campoEmail.classList.add('erro');
        formularioValido = false;
        // Aqui você pode adicionar uma mensagem de erro visual para o usuário
        erroEmail.textContent = "Email inválido";
      } else {
        campoEmail.classList.remove('erro');
        erroEmail.textContent = ""; // Limpa a mensagem de erro
      }
  
      if (formularioValido) {
        // Se o formulário for válido, você pode enviar os dados para o servidor
        console.log('Formulário válido!');
        // Aqui você faria o fetch para o servidor.
        formularioLogin.submit(); // Envia o formulário se válido
      }
    });
  });
