function calcularMedia(notas) {
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }
    return soma / notas.length;
}

function verificarAprovacao(media) {
    if (media <= 4) {
        return "Reprovado";
    } else if (media < 7) {
        return "Recuperação";
    } else {
        return "Aprovado";
    }
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let notas = [];

for (let i = 0; i < 3; i++) {
    rl.question(`Informe a nota ${i+1}: `, (nota) => {
        notas.push(parseFloat(nota));

        if (notas.length === 3) {
            // Calcula a média
            const media = calcularMedia(notas);

            // Verifica a situação do aluno
            const situacao = verificarAprovacao(media);

            // Imprime a situação atual
            console.log(`A média do aluno é ${media.toFixed(2)}, portanto ele está ${situacao}.`);

            // Se o aluno está em recuperação
            if (situacao === "Recuperação") {
                rl.question('Informe a nota da recuperação: ', (notaRecuperacao) => {
                    const novaMedia = (media + parseFloat(notaRecuperacao)) / 2;
                    if (novaMedia >= 5) {
                        console.log(`A nova média do aluno é ${novaMedia.toFixed(2)}, portanto ele está Aprovado na recuperação.`);
                    } else {
                        console.log(`A nova média do aluno é ${novaMedia.toFixed(2)}, portanto ele está Reprovado na recuperação.`);
                    }
                    rl.close();
                });
            } else {
                rl.close();
            }
        }
    });
}
