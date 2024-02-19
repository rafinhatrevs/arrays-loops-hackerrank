
function solucao(precos) {
    let menorPreco = precos[0];
    let soma = 0;

    for (let preco of precos) {
        soma += preco;
        if (preco < menorPreco) {
            menorPreco = preco;
        }
    }

    if (precos.length >= 5) {
        soma -= menorPreco;
    }

    console.log(soma);
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