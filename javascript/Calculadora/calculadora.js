function suma(){
    var numero1 = parseFloat(document.getElementById('numero1').value)
    var numero2 = parseFloat(document.getElementById('numero2').value)
    var resultado = numero1 + numero2

    document.getElementById('resultado').value = resultado
}

alert('Aqui tienes una calculadora para calcular el iq del Mateo')