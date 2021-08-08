function saludo(){
    alert('Hey carliti')
}

//var tiempo = setTimeout(saludo, 2000)
//clearTimeout(tiempo)

//document.getElementById('btn-iniciar').addEventListener('click', function(){
  //  setTimeout (saludo,2000)
//})

var intervalo = setInterval(saludo,2000)
document.getElementById('btn-detener').addEventListener('click',function(){
    clearInterval(intervalo)
})