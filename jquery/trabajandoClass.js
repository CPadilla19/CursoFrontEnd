$(document).ready(function(){

    $('#boton').on('click', function(){
        
        $(this).toggleClass('naranja')

        $(this).css({
            'height':'100px',
            width:'100px'
        })
        
    })
})