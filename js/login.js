const formularioLogin = document.getElementById('formulario-login');
const campoEmail = document.getElementById('email');
const campoSenha = document.getElementById('senha');
const erroEmail = document.getElementById('erro-email');
const erroSenha = document.getElementById('erro-senha');

function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function validarSenha(senha) {
  return senha.length >= 8;
}

// Validação em tempo real do e-mail
campoEmail.addEventListener('input', function() {
  if (!validarEmail(campoEmail.value)) {
    campoEmail.classList.add('erro');
  } else {
    campoEmail.classList.remove('erro');
  }
});

// Validação em tempo real da senha
campoSenha.addEventListener('input', function() {
  if (!validarSenha(campoSenha.value)) {
    
    campoSenha.classList.add('erro');
  } else {
    campoSenha.classList.remove('erro');
  }
});

formularioLogin.addEventListener('submit', function(evento) {
  evento.preventDefault(); // Impede o envio padrão do formulário

  const email = campoEmail.value;
  const senha = campoSenha.value;

  let formularioValido = true;

  if (!validarEmail(email)) {
    campoEmail.classList.add('erro');
    formularioValido = false;
  } else {
    campoEmail.classList.remove('erro');
  }

  if (!validarSenha(senha)) {
    campoSenha.classList.add('erro');
    formularioValido = false;
  } else {
    campoSenha.classList.remove('erro');
  }

  if (formularioValido) {
    // Se o formulário for válido, você pode enviar os dados para o servidor
    console.log('Formulário válido!');
    // Aqui você faria o fetch para o servidor.
  }
});
