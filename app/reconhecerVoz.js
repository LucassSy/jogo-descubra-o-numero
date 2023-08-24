const elementoChute = document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecongnition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = 'pt-br';
recognition.start();

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    chute = e.results[0][0].transcript
    exibeChuteNaTela(chute)
    verificaSeOvalorEhValido(chute)
}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
        <div class="chute__mensagem">Você disse:</div>
        <span class="box">${chute}</span> 
    ` 
}

recognition.addEventListener('end', () => recognition.start())