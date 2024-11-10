const faturamento = {
    "faturamento": [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]
}

let menor = faturamento.faturamento[0];
let maior = faturamento.faturamento[0];
let media = 0;
let soma = 0;
let diasAcimaMedia = 0;

for (let i = 0; i < faturamento.faturamento.length; i++) {
    if (faturamento.faturamento[i] < menor) {
        menor = faturamento.faturamento[i];
    }
    if (faturamento.faturamento[i] > maior) {
        maior = faturamento.faturamento[i];
    }
    soma += faturamento.faturamento[i];
}

media = soma / faturamento.faturamento.length;

for (let i = 0; i < faturamento.faturamento.length; i++) {
    if (faturamento.faturamento[i] > media) {
        diasAcimaMedia++;
    }
}

console.log('Menor valor de faturamento: ' + menor);
console.log('Maior valor de faturamento: ' + maior);
console.log('Número de dias em que o faturamento foi superior à média: ' + diasAcimaMedia);