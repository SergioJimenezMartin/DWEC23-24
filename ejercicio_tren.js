// Control de errores
function validarNumero(numero) {
    if (isNaN(numero)) {
      throw new Error("El número introducido no es válido.");
    }
  
    const longitud = numero.length;
    if (longitud % 2 === 1) {
      throw new Error("El número introducido debe ser par.");
    }
  
    for (let i = 0; i < longitud; i += 2) {
      const numeroSubido = parseInt(numero[i]);
      const numeroBajado = parseInt(numero[i + 1]);
      if (numeroSubido < 0 || numeroBajado < 0) {
        throw new Error("El número introducido debe ser positivo.");
      }
    }
  
    return true;
  }
  
  // Programa principal
  function main() {
    // Solicitamos el número al usuario
    const numero = prompt("Introduce un número: ");
  
    // Validamos el número
    try {
      validarNumero(numero);
    } catch (error) {
      console.error(error);
      return;
    }
  
    // Obtenemos el número de viajeros que suben y bajan en cada estación
    const viajerosSubidos = [];
    const viajerosBajos = [];
    for (let i = 0; i < numero.length; i += 2) {
      viajerosSubidos.push(parseInt(numero[i]));
      viajerosBajos.push(parseInt(numero[i + 1]));
    }
  
    // Calculamos el número de viajeros que llegan al final de trayecto
    const numeroViajeros = viajerosSubidos[0];
    for (let i = 1; i < viajerosSubidos.length; i++) {
      numeroViajeros -= viajerosBajos[i - 1];
    }
  
    // Imprimimos el resultado
    console.log("El número de viajeros que llegaron al final de trayecto es: " + numeroViajeros);
  }
  
  main();