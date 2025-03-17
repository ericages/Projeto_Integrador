// Validação Nome
let nomeInput = document.getElementById("nome");
let nomeHelper = document.getElementById("nome-helper");

nomeInput.addEventListener('change', function(evento){
    let valor = evento.target.value;
    console.log(valor);

    if(valor.length < 3){
        nomeInput.classList.add('error');
        nomeHelper.classList.add('visible');
        nomeHelper.innerText = "O nome de usuário deve ter no mínimo 3 caracteres";
    } else {
        nomeInput.classList.remove('error');
        nomeHelper.classList.remove('visible');
        nomeInput.classList.add('correct');
    }
});

// Validação Email com Regex
let emailInput = document.getElementById("email");
let emailHelper = document.getElementById("email-helper");

emailInput.addEventListener('change', function(evento){
    let valor = evento.target.value;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(emailRegex.test(valor)){
        emailInput.classList.remove('error');
        emailHelper.classList.remove('visible');
        emailInput.classList.add('correct');
    } else {
        emailInput.classList.add('error');
        emailHelper.classList.add('visible');
        emailHelper.innerText = "Insira um email válido.";
        emailInput.classList.remove('correct');
    }
});

// Confirmação do Email
let confEmailInput = document.getElementById("confirmaEmail");
let confEmailHelper = document.getElementById("confirmaEmail-helper");

confEmailInput.addEventListener('change', function(evento){
    let valor = evento.target.value;
    
    if(valor === emailInput.value){
        confEmailInput.classList.remove('error');
        confEmailHelper.classList.remove('visible');
        confEmailInput.classList.add('correct');
    } else {
        confEmailInput.classList.add('error');
        confEmailHelper.classList.add('visible');
        confEmailHelper.innerText = "Os emails não coincidem, tente novamente!";
        confEmailInput.classList.remove('correct');
    }
});

// Validação Senha
let passwordInput = document.getElementById("senha");
let passwordHelper = document.getElementById("senha-helper");

passwordInput.addEventListener('change', function(evento){
    let valor = evento.target.value;

    if(valor.length >= 8){
        passwordInput.classList.remove('error');
        passwordHelper.classList.remove('visible');
        passwordInput.classList.add('correct');
    } else {
        passwordInput.classList.add('error');
        passwordHelper.classList.add('visible');
        passwordHelper.innerText = "A senha deve ter no mínimo 8 caracteres.";
        passwordInput.classList.remove('correct');
    }
});

// Confirmação da Senha
let confirmPasswordInput = document.getElementById("confirma-senha");
let confirmPasswordHelper = document.getElementById("confirma-senha-helper");

confirmPasswordInput.addEventListener('change', function(evento){
    let valor = evento.target.value;

    if(valor === passwordInput.value){
        confirmPasswordInput.classList.remove('error');
        confirmPasswordHelper.classList.remove('visible');
        confirmPasswordInput.classList.add('correct');
    } else {
        confirmPasswordInput.classList.add('error');
        confirmPasswordHelper.classList.add('visible');
        confirmPasswordHelper.innerText = "As senhas não coincidem, tente novamente!";
        confirmPasswordInput.classList.remove('correct');
    }
});

// Validação Telefone com Regex
let celularInput = document.getElementById("celular");
let celularHelper = document.getElementById("erroCelular");

celularInput.addEventListener('change', function(evento){
    let valor = evento.target.value;
    let celularRegex = /^\(?\d{2}\)?\s?\d{5}-?\d{4}$/;

    if(celularRegex.test(valor)){
        celularInput.classList.remove('error');
        celularHelper.classList.remove('visible');
        celularInput.classList.add('correct');
    } else {
        celularInput.classList.add('error');
        celularHelper.classList.add('visible');
        celularHelper.innerText = "Insira um número de telefone válido.";
        celularInput.classList.remove('correct');
    }
});

// Validação CPF
let cpfInput = document.getElementById("cpf");
let cpfHelper = document.getElementById("erroCpf");

cpfInput.addEventListener('change', function(evento){
    let valor = evento.target.value.replace(/\D/g, '');
    
    if(valor.length === 11){
        cpfInput.classList.remove('error');
        cpfHelper.classList.remove('visible');
        cpfInput.classList.add('correct');
    } else {
        cpfInput.classList.add('error');
        cpfHelper.classList.add('visible');
        cpfHelper.innerText = "Insira um CPF válido.";
        cpfInput.classList.remove('correct');
    }
});

// Validação Idade (18+ anos)
let dataInput = document.getElementById("dataNascimento");
let dataHelper = document.getElementById("erroData");

dataInput.addEventListener('change', function() {
    let hoje = new Date();
    let nascimento = new Date(dataInput.value);
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    let aniversarioEsteAno = new Date(nascimento.setFullYear(hoje.getFullYear()));
    let maiorDeIdade = idade > 18 || (idade === 18 && hoje >= aniversarioEsteAno);

    if (maiorDeIdade) {
        dataInput.classList.remove('error');
        dataHelper.classList.remove('visible');
        dataInput.classList.add('correct');
    } else {
        dataInput.classList.add('error');
        dataHelper.classList.add('visible');
        dataHelper.innerText = "Você precisa ter no mínimo 18 anos para se cadastrar.";
        dataInput.classList.remove('correct');
    }
});

// Validação do CEP
let cepInput = document.getElementById("cep");
let cepHelper = document.getElementById("erroCep");

cepInput.addEventListener('change', function(evento){
    let valor = evento.target.value;
    let cepRegex = /^[0-9]{8}$/;

    if(cepRegex.test(valor)){
        cepInput.classList.remove('error');
        cepHelper.classList.remove('visible');
        cepInput.classList.add('correct');
    } else {
        cepInput.classList.add('error');
        cepHelper.classList.add('visible');
        cepHelper.innerText = "Insira um CEP válido, com 8 dígitos.";
        cepInput.classList.remove('correct');
    }
});
