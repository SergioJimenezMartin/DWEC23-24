//Un año es bisiesto si cumple los siguientes criterios: 
// Es divisible entre 4.
// Si termina en 00, se comprueba si es divisible entre 400 (2000 y 2400 sí son bisiestos. 2100, 2200 y 
//2300 no lo son).
//Mas información sobre años bisiestos en:
//https://es.wikipedia.org/wiki/A%C3%B1o_bisiesto 
//Escribe una función que reciba un año y devuelva 1 si es bisiesto, 0 en caso contrario.
//La función no debe leer nada de la entrada estándar ni mandar ningún dato por la salida estándar. La función debe definirse con este 
function esBisiesto(año) {
    return (año % 4 === 0 && año % 100 !== 0) || año % 400 === 0;
  }


/*Act 14 Escribe una función que reciba dos decimales con la base y altura de un rectángulo y devuelva su perímetro.
La función no debe leer nada de la entrada estándar ni mandar ningún dato por la salida estándar.
Nota: se devolverá un decimal (float). 
  */
function perimetroRectangulo(base, altura) {
  // Comprobar si los argumentos son números
  if (typeof base !== 'number' || typeof altura !== 'number') {
      console.log('Error: Ambos argumentos deben ser números.');
      return;
  }
  if ((base * 100) % 1 !== 0 || (altura * 100) % 1 !== 0) {
      console.log('Error: Los argumentos no pueden tener más de dos decimales.');
      return;
  }
  let perimetro = parseFloat((2 * (base + altura)).toFixed(2));

  return perimetro;
}