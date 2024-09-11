//Variables y tipos de datos
//1. Declara una variable llamada `nombre` y asígnale un valor de tipo `string`.
const nombre = 'Jose';
//2. Declara una variable llamada edad y asígnale un valor de tipo `number`.
const edad = 22;
//3. Declara una variable llamada `puedoConducir` y asígnale un valor de tipo `boolean` .
const puedoConducir = false;
//4. Para cada variable se debe imprimir por consola el resultado de cada variable declarada.
console.log(nombre);
console.log(edad);
console.log(puedoConducir);
//5. Para cada variable se debe imprimir el tipo de dato que es por consola.
console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof puedoConducir);

//Operadores aritméticos
//1. `Suma (+)`: Suma numero1 y numero2. Muestra el resultado por consola.
const numero1 = 10;
const numero2 = 20;
console.log(numero1 + numero2);
//2. `Resta (-)`: Resta numero1 y numero2. Muestra el resultado por consola.
console.log(numero1 - numero2);
//3. `Multiplicación (*)`: Multiplica numero1 y numero2. Muestra el resultado por consola.
console.log(numero1 * numero2);
//4. `División (/)`: Divide numero1 y numero2. Muestra el resultado por consola.
console.log(numero1 / numero2);
//5. `Modulo (%)`:  Saca el modulo entre numero2 y numero1. Muestra el resultado por consola.
console.log(numero2 % numero1);

//Operadores de asignacion y comparación
//1. Muestre por consola si el numero1 es mayor o igual que numero2.
console.log(numero1 >= numero2);
//2. Muestre por consola si el numero1 es menor o igual que numero2.
console.log(numero1 <= numero2);
//3. Muestre por consola si el numero1 es menor que numero3.
const numero3 = 5;
console.log(numero1 < numero3);
//4. Muestre por consola si el numero3 es menor que numero2.
console.log(numero3 < numero2);
//5. Muestre por consola si el numero3 es estrictamente diferente que numero1.
console.log(numero3 !== numero1);
//6. Muestre por consola si el numero1 es estrictamente igual al numero2.
console.log(numero1 === numero2);

//Condicionales
//1. Imprimir en consola el número mayor de los tres.
if(numero1 > numero2 && numero1 > numero3)
    console.log(numero1);
//2. Imprimir en consola el número menor de los tres.
if(numero1 < numero2 && numero1 < numero3)
    console.log(numero1);
//3. Imprimir en consola si el numero1 es par o impar.
if(numero1 % 2 === 0)
    console.log('Es par');
else
    console.log('Es impar');
//4. Imprimir en consola si el numero2 es par o impar.
if(numero2 % 2 === 0)
    console.log('Es par');
else
    console.log('Es impar');
//5. Imprimir en consola si el numero3 es par o impar.
if(numero3 % 2 === 0)
    console.log('Es par');
else
    console.log('Es impar');
//6. Imprimir en consola si el numero1 es múltiplo de 5.
if(numero1 % 5 === 0)
    console.log('Es multiplo de 5');
else
    console.log('No es multiplo de 5');
//7. Imprimir en consola si el numero2 es múltiplo de 5.
if(numero2 % 5 === 0)
    console.log('Es multiplo de 5');
else
    console.log('No es multiplo de 5');
//8. Imprimir en consola si el numero3 es múltiplo de 5.
if(numero3 % 5 === 0)
    console.log('Es multiplo de 5');
else
    console.log('No es multiplo de 5');