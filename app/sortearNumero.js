
const menorValor = 1;
let maiorValor = 100;
const elementoMenorValor = document.getElementById('menor-valor')
const elementoMaiorValor = document.getElementById('maior-valor')
const numeroGerado = gerarNumeroAleatorio();

elementoMenorValor.innerHTML = menorValor
elementoMaiorValor.innerHTML = maiorValor

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + menorValor);
}
