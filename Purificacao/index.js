
function solucao(stringCorrompida) {
    let novaString = "";

    for (let caractere of stringCorrompida) {
        if (caractere !== "!" && caractere !== "@" &&
            caractere !== "#" && caractere !== "$" &&
            caractere !== "%" && caractere !== "&" &&
            caractere !== "*" && caractere !== "(" &&
            caractere !== ")") {
            novaString += caractere;
        }
    }

    console.log(novaString);
}

function processData(input) {
    solucao(input);
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