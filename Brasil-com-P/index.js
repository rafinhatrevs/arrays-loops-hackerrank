function solucao(primeiraLetra, segundaLetra, palavras) {
    const letras = primeiraLetra + segundaLetra;

    let encontrou = false;
    let palavrasEncontradas = "";

    for (let palavra of palavras) {
        if (palavra.startsWith(letras)) {
            palavrasEncontradas = palavra;
            console.log(palavrasEncontradas);
            encontrou = true;
        }
    }

    if (!encontrou) {
        console.log("NENHUMA");
    }
}

function processData(input) {
    const { primeiraLetra, segundaLetra, palavras } = JSON.parse(input);
    solucao(primeiraLetra, segundaLetra, palavras);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});