//Unir tres arrays en uno eliminando los elemntos duplicados
let miArray1 = [1, 2, 3, 4, 5, 6, 7, 8]
let miArray2 = [1, 2,3, 8, 9, 0, 43, 45, 65]
let miArray3 = [0, 17, 32, 87, 45]

let miSet = new Set ([miArray1].concat[miArray2].concat[miArray3]);
let miArrayFinal = [...miSet]