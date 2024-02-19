function solucao(disparos) {
    let tiros = 0;

    for (let disparo of disparos) {
        if (disparo > 70) {
            tiros++;
        }
    }

    if (tiros >= 3) {
        console.log(tiros);
    } else {
        console.log("ELIMINADO");
    }
}

function processData(input) {
    solucao(input.split(' ').map(x => Number(x)).filter(x => x));
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