// Criando as variáveis
const nome = document.getElementById("nome")
const cidade = document.getElementById("cidade")

const resultado = document.getElementById("resultado")
const resultadoCid = document.getElementById("resultadoCid")

// Criando funções
function limparCampos() {
    nome.value = " "
    cidade.value = " "
}

function mudar(event) {
    event.preventDefault()

    // Imprimir nome na tela
    resultado.innerHTML = nome.value
    resultadoCid.innerHTML = cidade.value

    // Limpando campos
    limparCampos()
}
