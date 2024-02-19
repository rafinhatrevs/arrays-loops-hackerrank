function solucao(notas) {
    let maiorNota = notas[0];
    let menorNota = notas[0];
    let total = 0;

    for (let nota of notas) {
        total += nota;
        if (nota > maiorNota) {
            maiorNota = nota;
        }

        if (nota < menorNota) {
            menorNota = nota;
        }
    }

    let media = (total - maiorNota - menorNota) / (notas.length - 2);

    console.log(media);
}

function processData(input) {
    solucao(input.trim().split(" ").filter(x => x).map(x => parseInt(x, 10)));
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