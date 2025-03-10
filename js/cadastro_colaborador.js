// Validação Nome
let nomeInput = document.getElementById("nome");
let nomeLabel = document.querySelector('label[for="nome"]');
let nomeHelper = document.getElementById("nome-helper");

nomeInput.addEventListener('change', function(evento){
    let valor = evento.target.value;
    console.log(valor);

    if(valor.length  < 3){
        nomeInput.classList.add('error')
        nomeHelper.classList.add('visible')
        nomeHelper.innerText = "O nome de usuário deve ter no mínimo 3 caracteres"
    } else {
        nomeInput.classList.remove('error')
        nomeHelper.classList.remove('visible')
        nomeInput.classList.add('correct')
    }
})

// Validação Email
let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

emailInput.addEventListener('change', function(evento){
    let valor = evento.target.value;
    console.log(valor);

    if(valor.includes('@') && valor.includes('.com')){
        // caso o valor seja válido
        emailInput.classList.remove('error')
        emailHelper.classList.remove('visible')
        emailInput.classList.add('correct')
    } else {
        // caso o valor seja inválido
        emailInput.classList.add('error')
        emailHelper.classList.add('visible')
        emailHelper.innerText = "O email deve conter '@' e '.com'"
        emailInput.classList.remove('correct')
    }
})

//Confirmação do Email
let confEmailInput = document.getElementById("confirmaEmail");
let confEmailLabel = document.querySelector('label[for="confirmaEmail"]');
let confEmailHelper = document.getElementById("confirmaEmail-helper");

confEmailInput.addEventListener('change', function(evento){
    let valor = evento.target.value;
    console.log(valor);

    if(valor === emailInput.value){
        // caso o valor seja válido
        confEmailInput.classList.remove('error')
        confEmailHelper.classList.remove('visible')
        confEmailInput.classList.add('correct')
    } else {
        // caso o valor seja inválido
        confEmailInput.classList.add('error')
        confEmailHelper.classList.add('visible')
        confEmailHelper.innerText = "Os emails não coincidem, tente novamente!"
        confEmailInput.classList.remove('correct')
    }
})

// Validação Senha
let passwordInput = document.getElementById("senha");
let passwordLabel = document.querySelector('label[for="senha"]');
let passwordHelper = document.getElementById("senha-helper");

passwordInput.addEventListener('change', function(evento){
    let valor = evento.target.value;
    console.log(valor);

    if(valor.length >= 8){
        // caso o valor seja válido
        passwordInput.classList.remove('error')
        passwordHelper.classList.remove('visible')
        passwordInput.classList.add('correct')
    } else {
        // caso o valor seja inválido
        passwordInput.classList.add('error')
        passwordHelper.classList.add('visible')
        passwordHelper.innerText = "A senha deve ter no mínimo 8 caracteres."
        passwordInput.classList.remove('correct')
    }
})

let confirmPasswordInput = document.getElementById("confirma-senha");
let confirmPasswordLabel = document.querySelector('label[for="confirma-senha"]');
let confirmPasswordHelper = document.getElementById("confirma-senha-helper");

// Confirmação da Senha
confirmPasswordInput.addEventListener('change', function(evento){
    let valor = evento.target.value;
    console.log(valor);

    if(valor === passwordInput.value){
        // caso o valor seja válido
        confirmPasswordInput.classList.remove('error')
        confirmPasswordHelper.classList.remove('visible')
        confirmPasswordInput.classList.add('correct')
    } else {
        // caso o valor seja inválido
        confirmPasswordInput.classList.add('error')
        confirmPasswordHelper.classList.add('visible')
        confirmPasswordHelper.innerText = "As senhas não coincidem, tente novamente!"
        confirmPasswordInput.classList.remove('correct')
    }
})

// Validação Telefone
let celularInput = document.getElementById("celular");
let celularLabel = document.querySelector('label[for="celular"]');
let celularHelper = document.getElementById("erroCelular");

celularInput.addEventListener('change', function(evento){
    let valor = evento.target.value;
    console.log(valor);

    if(valor.length >= 9){
        // caso o valor seja válido
        celularInput.classList.remove('error')
        celularHelper.classList.remove('visible')
        celularInput.classList.add('correct')
    } else {
        // caso o valor seja inválido
        celularInput.classList.add('error')
        celularHelper.classList.add('visible')
        erroCelular.innerText = "Insira um número de telfone válido."
        passwordInput.classList.remove('correct')
    }
})

//Validação CPF
let cpfInput = document.getElementById("cpf");
let cpfLabel = document.querySelector('label[for="cpf"]');
let cpfHelper = document.getElementById("erroCpf");

cpfInput.addEventListener('change', function(evento){
    let valor = evento.target.value;
    console.log(valor);

    if(valor.length >= 11){
        // caso o valor seja válido
        cpfInput.classList.remove('error')
        cpfHelper.classList.remove('visible')
        cpfInput.classList.add('correct')
    } else {
        // caso o valor seja inválido
        cpfInput.classList.add('error')
        cpfHelper.classList.add('visible')
        erroCpf.innerText = "Insira um CPF válido."
        cpfInput.classList.remove('correct')
    }
})

// Validação Idade
let dataInput = document.getElementById("dataNascimento");
let dataHelper = document.getElementById("erroData");

dataInput.addEventListener('change', function() {
    let hoje = new Date();
    let nascimento = new Date(dataInput.value);
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    
    // Criar uma nova data ajustada para verificar se já fez aniversário
    let aniversarioEsteAno = new Date(nascimento);
    aniversarioEsteAno.setFullYear(hoje.getFullYear());

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
let cepLabel = document.querySelector('label[for="cep"]');
let cepHelper = document.getElementById("erroCep");

cepInput.addEventListener('change', function(evento){
    let valor = evento.target.value;
    console.log(valor);

    if(valor.length == 8){
        // caso o valor seja válido
        cepInput.classList.remove('error')
        cepHelper.classList.remove('visible')
        cepInput.classList.add('correct')
    } else {
        // caso o valor seja inválido
        cepInput.classList.add('error')
        cepHelper.classList.add('visible')
        erroCep.InnerText = "Insira um CEP válido, com 8 dígitos."
        cepInput.classList.remove('correct')
    }
})
