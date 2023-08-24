recognition.onresult = (evento) => {
    const numerosPorExtenso = {
        "zero": 0,
        "um": 1,
        "dois": 2,
        "três": 3,
        "quatro": 4,
        "cinco": 5,
        "seis": 6,
        "sete": 7,
        "oito": 8,
        "nove": 9
    };

    let chute = evento.results[0][0].transcript.toLowerCase().replaceAll(" ", "");
    
    for (let [nome, numero] of Object.entries(numerosPorExtenso)) {
        if (chute.includes(nome)) {
            chute = chute.replace(nome, numero);
            break;
        }
    }
    if (chute.startsWith("menos")) {
        chute = chute.replace(/menos/g, "-", chute);
    }
    
    exibeChuteNaTela(chute);
    verificaSeOvalorEhValido(chute);
};