$(document).ready(function(){
    let titulo = $('#titulo')
    let info = $('#info')

    info.append('Ancho: ' + titulo.width() + '<br/>')
    info.append('Ancho Interno: ' + titulo.outerWidth() + '<br/>')
})