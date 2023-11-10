Object.fromEntries

//Dos arrays de partida
const keys = ["name","life", "power", "talk"];
const values = ["Otto", 99, 10, function(){return "hola"}];

//se crea un array de pares
const entries = [];
for (let i of Object.keys(keys)){
    const key = keys [i];
    const value = values[i];
    entries.push([key, value]);

}
//Se usa Object.fromEntries(entries)