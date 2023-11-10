try {
    alert('Inicio de sentencias de try');    //(1)
    Hola_Caracola;  //error, la variable no está definida
    alert('Fin de sentencias de try (Si/)');  //(2)
}
catch (err) {
    //alert ('¡Un error ha ocurrido!');  //(3)
    alert(err.name);
    alert(err.mesagge);
    alert(err.stack);
    alert(err);  //todos a la vez

}
/*
let saldo = 340;
let cantidad = 300;
function retirar(saldo, cantidad){
    if (saldo<cantidad){
        return false;
    }
    return (saldo-cantidad);




}
resultado= retirar(saldo, cantidad)
if (resultado === false){
    alert("saldo insuficiente")
}
else{
    alert(saldo=resultado)
}
*/
function retirar(saldo, cantidad){
    if (saldo<cantidad){
        throw "saldo insuficiente"
    }
    return (saldo-cantidad)
}
    try{
        let cantidad = prompt ()
        saldo=retirar(saldo, cantidad)
        alert("su operacion... con exito. Saldo=" +saldo)

    }
    catch (err){
        alert(err)
    }





