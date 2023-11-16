function calcularAreaEPerimetro(raio) {
    let area = Math.PI * Math.pow(raio, 2);

    let perimetro = 2 * Math.PI * raio;

    return {
        area: area,
        perimetro: perimetro
    };
}

let raio = 5;
let resultado = calcularAreaEPerimetro(raio);

console.log(`Área do círculo com raio ${raio}: ${resultado.area.toFixed(2)}`);
console.log(`Perímetro do círculo com raio ${raio}: ${resultado.perimetro.toFixed(2)}`);