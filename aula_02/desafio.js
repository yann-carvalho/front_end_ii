// Cálculo de média ponderada com 3 notas, sendo a n1 com peso 2, n2 com peso 3 e n3 com peso 5

var n1 = parseFloat(prompt("Informe a primeira nota: "));
var n2 = parseFloat(prompt("Informe a segunda nota: "));
var n3 = parseFloat(prompt("Informe a terceira nota: "));

nota = ((n1*2)+(n2*3)+(n3*5)) / (2+3+5)

console.log("A média ponderada do aluno é: ", nota)