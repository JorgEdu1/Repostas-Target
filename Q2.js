let num = 4;

let a = 0;
let b = 1;
let c = 0;
let i = 0;

while (c < num) {
    c = a + b;
    a = b;
    b = c;
    i++;
}

if (c === num) {
    console.log('O número ' + num + ' está na sequência de Fibonacci.');
} else {
    console.log('O número ' + num + ' não está na sequência de Fibonacci.');
}