function numeroPatrones(texto) {
    // inicializamos los contadores de patrones
    const contador00 = 0;
    const contador101 = 0;
    const contadorABC = 0;
    const contadorH0 = 0;
  
    // iteramos sobre el texto
    for (let i = 0; i < texto.length; i++) {
      // comprobamos si el patrón "00" coincide
      if (texto[i] === "0" && texto[i + 1] === "0") {
        contador00++;
      }
  
      // comprobamos si el patrón "101" coincide
      if (texto[i] === "1" && texto[i + 1] === "0" && texto[i + 2] === "1") {
        contador101++;
      }
  
      // comprobamos si el patrón "ABC" coincide
      if (texto[i] === "A" && texto[i + 1] === "B" && texto[i + 2] === "C") {
        contadorABC++;
      }
  
      // comprobamos si el patrón "H0" coincide
      if (texto[i] === "H" && texto[i + 1] === "0") {
        contadorH0++;
      }
    }
  
    // devolvemos el número de patrones encontrados
    return contador00 + contador101 + contadorABC + contadorH0;
  }
  
  // función para mostrar los resultados
  function mostrarResultados(numeroPatrones) {
    // mostramos el número de patrones encontrados
    console.log("Se han encontrado " + numeroPatrones + " patrones");
  
    // mostramos el número de patrones de cada tipo
    console.log("Patrón '00': " + contador00);
    console.log("Patrón '101': " + contador101);
    console.log("Patrón 'ABC': " + contadorABC);
    console.log("Patrón 'H0': " + contadorH0);
  }
  
  // función principal
  function main() {
    // solicitamos la cadena de texto
    const texto = prompt("Introduce una cadena de texto:");
  
    // calculamos el número de patrones
    const numeroPatrones = numeroPatrones(texto);
  
    // mostramos los resultados
    mostrarResultados(numeroPatrones);
  }
  
  // ejecutamos la función principal
  main();