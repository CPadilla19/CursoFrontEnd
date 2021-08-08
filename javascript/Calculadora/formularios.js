var formulario = document.getElementById('formulario')
var nombre = formulario.nombre
var sexo = formulario.sexo
var terminos = formulario.terminos

function validar(e){
    if(nombre.value > 18){
        alert('Maximo de caracteres permitidos')
       
    } 
    else if(nombre.value == ''){
        alert('Porfavor escribe un nombre')
    }

    if(sexo[0].checked == false && sexo[1].checked == false){
        alert('Ingresa tu sexo')
    }

    if(terminos.checked == false){
        alert('Acepta los terminos')
    }

    e.preventDefault()
}

formulario.addEventListener('submit', validar)