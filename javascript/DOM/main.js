var cajas= document.getElementsByTagName('div')

//var cajas = document.getElementsByClassName('caja')


var primeraCaja = document.getElementById('primeraCaja')




//primeraCaja.innerHTML = '<u> Hey </u>'


var caja = document.createElement('div')
var contenido = document.createTextNode('Hola Mundo')
caja.appendChild(contenido)
//caja.setAttribute('class','caja naranja')

//var contenedor = document.getElementById('contenedor')
//contenedor.appendChild(caja)


caja.id = 'primera'
caja.className = 'caja naranja'

var padre = cajas[0].parentNode

//padre.insertBefore(caja,primeraCaja)
padre.replaceChild(caja,cajas[1])

padre.removeChild(cajas[3])