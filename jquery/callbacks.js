$(document).ready(function(){

   

    $('#ejecutar').on('click', function(){
       $('.caja').slideUp(1000, function(){
           $(this).slideDown(1000)
       })
    })

    //$('#ejecutar').on('click', function(){
      //  alert('Animacion Inicida')
        //$('.caja').slideUp(300)
        //$('.caja').slideDown(300)
    //})
})