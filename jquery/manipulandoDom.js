$(document).ready(function(){

  

    $('#titulo').html('<u>Encabezado modificado</u>')

    let nombre = $('#nombre')

    nombre.on('change', function(){
        $('#titulo').text(nombre.val())
    })

    //$('#enlace').text('FalconMasters.com')
    //$('#enlace').attr('href', 'http://www.falconmasters.com')

    $('#enlace').attr({
        'class':'azul',
        'target': '_blank'
    })
})