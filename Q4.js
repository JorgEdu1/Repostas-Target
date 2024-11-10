const faturamento = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
}

let total = 0;
let percentual = 0;

for (let estado in faturamento) {
    total += faturamento[estado];
}

for (let estado in faturamento) {
    percentual = (faturamento[estado] / total) * 100;
    console.log('Percentual de representação do estado ' + estado + ': ' + percentual.toFixed(2) + '%');
}