//1. Crea una función que reciba como parámetro un array de números y retorne la suma de todos los números del array.
function sumaArray(array) {
    let suma = 0;
    for(let i = 0; i < array.length; i++)
        suma += array[i];
    return suma;
}
//2. Crea una función ( o varias) que reciba como parámetro un array de números y retorne el promedio de todos los números del array.
function promedioArray(array) {
    let suma = 0;
    for(let i = 0; i < array.length; i++)
        suma += array[i];
    return suma / array.length;
}
//3. Crea una función que tome un arreglo de strings como parámetro y devuelva un nuevo arreglo que contenga los mismos strings pero con todas las letras en mayúsculas.
function mayusculasArray(array) {
    for(let i = 0; i < array.length; i++)
        array[i] = array[i].toUpperCase();
    return array;
}
//4. Crea una función que tome un arreglo de números como parámetro y devuelva un nuevo arreglo que contenga solo los números pares.
function paresArray(array) {
    let pares = [];
    for(let i = 0; i < array.length; i++)
        if(array[i] % 2 === 0)
            pares.push(array[i]);
    return pares;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrayStrings = ['hola', 'mundo', 'cv', 'MAN'];
console.log(sumaArray(array));
console.log(promedioArray(array));
console.log(mayusculasArray(arrayStrings));
console.log(paresArray(array));
