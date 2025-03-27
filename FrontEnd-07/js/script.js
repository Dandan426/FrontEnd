const nome = document.querySelector("#nome")
const button = document.querySelector("button")
const lista = document.querySelector(".lista")

// Função para limpar campos
function clearInput() {
    nome.value = ""
} 

// Criando uma função
button.addEventListener("click", function(event) {
    event.preventDefault()
    const inputValue = nome.value
    const templateHTML = `<li>${inputValue}</li>`

    /// Adicionando lista <LI> 
    lista.innerHTML += templateHTML

    // Limpando campo
    clearInput()
});