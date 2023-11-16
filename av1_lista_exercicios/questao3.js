let quantidadeNumeros = parseInt(prompt("Digite a quantidade de números:"));

let menorValor = Infinity;
let maiorValor = -Infinity;
let somaValores = 0;

for (let i = 1; i <= quantidadeNumeros; i++) {
    let numero = parseFloat(prompt(`Digite o número ${i}:`));

    if (numero < menorValor) {
        menorValor = numero;
    }

    if (numero > maiorValor) {
        maiorValor = numero;
    }

    somaValores += numero;
}

console.log(`Menor valor: ${menorValor}`);
console.log(`Maior valor: ${maiorValor}`);
console.log(`Soma dos valores: ${somaValores}`);