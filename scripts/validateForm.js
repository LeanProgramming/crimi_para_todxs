window.onload = iniciar;

function iniciar() {
    document.getElementById('send').addEventListener('click', validate, false);
}


function valida_apellido() {
    var elemento = document.getElementById('apellido');
    if (elemento.value == '') {
        alert('Por favor ingrese su apellido');
        return false
    }
    return true;
}

function valida_nombre() {
    var elemento = document.getElementById('nombre');
    if (elemento.value == '') {
        alert('Por favor ingrese su nombre');
        return false
    }
    return true;
}

function valida_email() {
    var elemento = document.getElementById('email');
    if (elemento.value == '') {
        alert('Por favor ingrese un email de contacto');
        return false
    }
    return true;
}

function valida_checkbox() {
    var elemento = document.getElementById('aportarSi');
    var elemento2 = document.getElementById('aportarNo');
    if (!elemento.checked && !elemento2.checked) {
        alert('Seleccione una opción por favor');
        return false;
    }
    if (elemento.checked && elemento2.checked) {
        alert('Seleccione solo una opción por favor');
        return false;
    }
    return true;
}

function validate(e) {
    if (valida_apellido() && valida_nombre() && valida_email() && valida_checkbox() && confirm('¿Desea enviar su aporte?')) {
        return true;
    } else {
        e.preventDefault();
        return false;
    }
}