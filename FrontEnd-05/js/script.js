// Obtém os elementos do DOM
const valor1 = document.getElementById("valor1");
const valor2 = document.getElementById("valor2");

// Variavel resultado
const resultado = document.getElementById("resultado"); 

function limparCampos() {
    valor1.value = "";
    valor2.value = "";
}

function tempo() {
    setTimeout(function() {
        resultado.innerHTML = 0;
    }, 2000)
}

// Criando função SOMA
function somar(event) {
    event.preventDefault();
    let resultadoSoma = Number(valor1.value) + Number(valor2.value);

    resultado.innerHTML = resultadoSoma

    // Limpar campos
    limparCampos();

    // Função tempo
    tempo();
}

// Criando função SUBTRAÇÂO
function sub(event) {
    event.preventDefault();
    let resultadoSub = Number(valor1.value) - Number(valor2.value);

    resultado.innerHTML = resultadoSub

    limparCampos();
    tempo();
}

// Função DIVISÂO
function div(event) {
    event.preventDefault();
    let resultadoDiv = Number(valor1.value) / Number(valor2.value);

    resultado.innerHTML = resultadoDiv

    limparCampos();
    tempo();
}

// Função MULTIPLICAÇÂO
function mult(event) {
    event.preventDefault();
    let resultadoMult = Number(valor1.value) * Number(valor2.value);
    
    resultado.innerHTML = resultadoMult

    limparCampos();
    tempo();
}