function solucao(resultados) {
    let pontos = 0;

    for (let resultado of resultados) {
        if (resultado === "V") {
            pontos += 3;
        }

        if (resultado === "E") {
            pontos += 1;
        }

        if (resultado === "D") {
            pontos += 0;
        }
    }

    console.log(pontos);

}

function processData(input) {
    const resultados = JSON.parse(input);
    solucao(resultados);
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