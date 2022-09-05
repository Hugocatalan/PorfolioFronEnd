
var nombre = "Hugo";
var altura = "1.64";

var concatenacion = nombre +" "+ altura;


var datos = document.getElementById("datos");
datos.innerHTML = concatenacion;

if(altura >= 1.67){ 
    datos.innerHTML += "<h1>eres giganton</h1>";
}
else{
    datos.innerHTML += "<h1> eres enano</h1>";
}
    
