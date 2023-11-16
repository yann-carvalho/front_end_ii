function calcularMontante(capitalInicial, taxaJuros, tempoMeses) {
    let taxaDecimal = taxaJuros / 100;

    let montante = capitalInicial * Math.pow(1 + taxaDecimal, tempoMeses);

    return montante.toFixed(2);
}

let capitalInicial = parseFloat(prompt("Digite o capital inicial investido:"));
let taxaJuros = parseFloat(prompt("Digite a taxa de juros mensal (%):"));
let tempoMeses = parseInt(prompt("Digite o tempo do investimento em meses:"));

let resultado = calcularMontante(capitalInicial, taxaJuros, tempoMeses);

console.log(`O montante do investimento é R$ ${resultado}`);