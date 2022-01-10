function validarEmail(email) {
    var expRe = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var valido = expRe.test(email);
    if (valido == true) {
        alert('El Email introducido es válido');
    }
    else {
        alert('El Email introducido NO es válido');
    }
}

function validarContraseña() {
    const inputPassword1 = document.getElementById('password');
    const inputPassword2 = document.getElementById('password2');
    if (inputPassword1.value !== inputPassword2.value) {
        alert('Ambas contraseñas deben ser IGUALES');
    } else {
        alert('La contraseña introducida es VÁLIDA');
    }
}

function validarNombre(nombre) {
    var expRn = /^[a-zA-ZÀ-ÿ\s]{1,40}$/; // Letras y espacios, pueden llevar acentos.
    var valido = expRn.test(nombre);
    if (valido == false) {
        alert('Por favor NO introduzca números ni caracteres especiales. Se permiten letras y espacios, pueden llevar acentos');
    } else {
        alert('Nombre válido');
    }
}

function validarCodigoPostal(cp) {
    var expRc = /^(?:0[1-9]\d{3}|[1-4]\d{4}|5[0-2]\d{3})$/;
    var valido = expRc.test(cp);
    if (valido == true) {
        alert('El Código Postal introducido es VÁLIDO');
    } else {
        alert('El Código Postal introducido NO es VÁLIDO');
    }
}

function validarInsultos(texto) {
    texto = texto.toLowerCase();
    let arrayInsultos = ['tonto','gilipollas','retrasado','subnormal'];
    let termino;
    let insulto = false;

    for (let i=0 ; i < arrayInsultos.length; i++){
        termino = arrayInsultos[i];
        if (texto.indexOf(termino) !== -1){
            insulto = true;
            alert('Área de texto NO VÁLIDO contiene insultos')
        }
    }
    return insulto;
}
