//1. **Crear un objeto de persona**: Define un objeto llamado "persona" que tenga propiedades como nombre, edad y género. Luego, muestra la información de esa persona por la consola.
const persona = {
    nombre: 'Jose',
    edad: 22,
    genero: 'Masculino'
};

console.log(persona);

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.genero);

console.log(typeof persona.nombre);
console.log(typeof persona.edad);
console.log(typeof persona.genero);

//2. Crear un objeto llamado caja: La caja se compone de cuadernos, lápices, papel, fotografías y indica el estado si esta en buen estado o no. Imprimir el objeto entero por consola, 
//imprimir cada propiedad del objeto y el tipo de dato que es.
const caja = {
    cuadernos: 5,
    lapices: 10,
    papel: 100,
    fotografias: 20,
    estado: 'Buen estado'
};
console.log(caja);
console.log(caja.cuadernos);
console.log(caja.lapices);
console.log(caja.papel);
console.log(caja.fotografias);
console.log(caja.estado);

console.log(typeof caja.cuadernos);
console.log(typeof caja.lapices);
console.log(typeof caja.papel);
console.log(typeof caja.fotografias);
console.log(typeof caja.estado);
