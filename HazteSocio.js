alert("Gracias por hacerte socio! Rellena los campos para finalizar.");
function capturar(){
    function Persona(nombre,edad){
        this.nombre=nombre;
        this.edad=edad;
    }
    var nombreCapturar = document.getElementById("nombre").value;
    var edadCapturar = document.getElementById("edad").value;
    
    nuevaPersona = new Persona(nombreCapturar, edadCapturar);
    console.log(nuevaPersona);
    añadir();
}
var baseDatos = [];
function añadir(){
    baseDatos.push(nuevaPersona);
    console.log(baseDatos)
    document.getElementById("tabla").innerHTML += '<tbody><td>'+nuevaPersona.nombre+'</td><td>'+nuevaPersona.edad+'</td></tbody>';
}