//for(var i= 0; i<=10; i++){
  //  document.write(i)
    //document.write('<br>')
//}


//for(var i=10; i>=0; i--){
    //document.write(i)
    //document.write('<br>')
//}

var meses= ['Enero','Febrero', 'Marzo', 'Abril', 'Mayo',
            'Junio', 'Julio', 'Agosto', 'Septiembre',
            'Octubre', 'Noviembre', 'Diciembre']

        //for(var i=0; i<meses.length;i++){
            //document.write(i+1 +'.- '+meses[i])
            //document.write('<br>')
        //}

        for (mes in meses) {
            document.write(meses[mes])
            document.write('<br>')

        }