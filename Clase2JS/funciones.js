//1. Crea una función que reciba un string y retorne el string en mayúsculas.
function mayuscula(string) {
    return string.toUpperCase();
}
//2. Crea una función que reciba un string y retorne el string en minúsculas.
function minuscula(string) {
    return string.toLowerCase();
}
//3. Crear una función que reciba como parámetro 2 números y los reste.
function resta(a, b) {
    return a - b;
}
//4. Crear una función que reciba como parámetro 2 números y los divida.
function division(a, b) {
    return a / b;
}
//5. Crear una función que reciba como parámetro 2 números y los multiplique.
function multiplicacion(a, b) {
    return a * b;
}
//6. Crear una función que reciba un string y devuelva la longitud del string.
function longitud(string) {
    return string.length;
}

const a = 3;
const b = 2;
const prueba = 'pRuEbA';

console.log(mayuscula(prueba));
console.log(minuscula(prueba));
console.log(resta(a, b));
console.log(division(a, b));
console.log(multiplicacion(a, b));
console.log(longitud(prueba));

