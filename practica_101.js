//ejercicio_1------------------------------------------


const precioRosa = 8;
const cantidadRosas = 70;
const precioLirio = 10;
const cantidadLirios = 50;
const precioTulipán = 2;
const cantidadTulipanes = 120;

const valorRosas = precioRosa * cantidadRosas;
const valorLirios = precioLirio * cantidadLirios;
const valorTulipanes = precioTulipán * cantidadTulipanes;

const valorTotal = valorRosas + valorLirios + valorTulipanes;

console.log(`
Rosa:
  precio unitario: ${precioRosa},
  cantidad: ${cantidadRosas},
  valor: ${valorRosas}
Lirio:
  precio unitario: ${precioLirio},
  cantidad: ${cantidadLirios},
  valor: ${valorLirios}
Tulipán:
  precio unitario: ${precioTulipán},
  cantidad: ${cantidadTulipanes},
  valor: ${valorTulipanes}
Total: ${valorTotal}
`);
//Los corchetes dobles ${} se pueden utilizan para insertar variables o expresiones en una cadena.