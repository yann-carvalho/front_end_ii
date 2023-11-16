let populacaoA = 80000;
let taxaCrescimentoA = 0.03;

let populacaoB = 200000;
let taxaCrescimentoB = 0.015;

let anos = 0;

while (populacaoA < populacaoB) {
    populacaoA = populacaoA * (1 + taxaCrescimentoA);
    populacaoB = populacaoB * (1 + taxaCrescimentoB);
    anos++;
}

console.log(`Serão necessários ${anos} anos para a população do país A ultrapassar ou igualar a população do país B.`);