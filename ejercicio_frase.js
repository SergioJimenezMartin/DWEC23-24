const frase = prompt("Ingrese una frase: ");
const palabras = frase.split(" ");
const primeraPalabra = palabras[0];
const ultimaPalabra = palabras[palabras.length - 1];
const numeroPalabras = palabras.length;

console.log("La primera palabra es: " + primeraPalabra);
console.log("La última palabra es: " + ultimaPalabra);
console.log("El número de palabras es: " + numeroPalabras);