function verificaSeOvalorEhValido(chute) {
    const numero = +chute

    if (chuteForInvalido(numero)) {

        if (chute.toUpperCase() === "JOGAR NOVAMENTE") {
            window.location.reload()
        }

        if (chute.toUpperCase() === "DESISTO") {
            document.body.innerHTML = `
                <h1 class="titulo derrota">Você Perdeu<i class="fa-solid fa-exclamation fa-beat"></i><i class="fa-solid fa-exclamation fa-beat"></i></h1>
                <h3 class="pergunta">O número era ${numeroGerado}</h3>
                <h3 class="pergunta">Fale Jogar Novamente</h3>
                <button id="jogar-novamente" class="botao"><i class="fa-sharp fa-solid fa-rotate-right fa-spin"></i></button>
                <ul>
                    <li class="link_github">
                        <i class="fa-brands fa-github fa-lg" style="color: #edd8c7;"></i> <a href="https://github.com/LucassSy" class="link_github">LucassSy</a>
                    </li>
                </ul>
            `
            document.body.style.backgroundColor = "black";
        } else {
            elementoChute.innerHTML += '<div class="chute__mensagem">Valor inválido</div>'
            return
        }
    }

    if (numeroForaDoValorPermitido(numero)) {
        elementoChute.innerHTML += `
        <div class="chute__mensagem">Valor inválido !!</div> 
        <div class="chute__mensagem">O número deve ser entre ${menorValor} e ${maiorValor}</div>
        `
        return
    }

    if (numero === numeroGerado) {
        document.body.innerHTML = `
            
            <h1 class="titulo">Resposta Correta <i class="fa-solid fa-exclamation fa-beat"></i><i class="fa-solid fa-exclamation fa-beat"></i></h1>
            <h3 class="pergunta">O número é ${chute}</h3>
            <h3 class="pergunta">Fale Jogar Novamente</h3>
            <button id="jogar-novamente" class="botao"><i class="fa-sharp fa-solid fa-rotate-right fa-spin"></i></button>
            <ul>
                <li class="link_github">
                    <i class="fa-brands fa-github fa-lg" style="color: #edd8c7;"></i> <a href="https://github.com/LucassSy" class="link_github">LucassSy</a>
                </li>
            </ul>
        `
        document.body.style.backgroundColor = "rgb(69, 167, 73)";
    } else if (numero > numeroGerado) {
        elementoChute.innerHTML += `<div class="chute__mensagem">O número é menor <i class="fa-solid fa-angles-down fa-bounce" style="color: #EDDBC7;"></i></div>`
    } else {
        elementoChute.innerHTML += `<div class="chute__mensagem">O número é maior <i class="fa-solid fa-angles-up fa-bounce" style="color: #EDDBC7;"></i></div>`
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForaDoValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})