let salarioInicial = parseFloat(prompt("Digite o salário inicial do funcionário:"));

let anoContratacao = 1995;

let taxaAumento = 0.015;

for (let ano = 1996; ano <= 2023; ano++) {
    salarioInicial += salarioInicial * taxaAumento;

    taxaAumento *= 2;
}

console.log(`O salário atual do funcionário em 2023 é de R$ ${salarioInicial.toFixed(2)}`);