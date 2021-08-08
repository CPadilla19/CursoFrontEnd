//if(){


//var edad= 18

//if(edad>=18){
   // document.write('Eres mayor de edad')
//} //else{
  //  document.write('Eres menor de edad')
//}


//var pais='Mexico'
//if(pais=='España'){
    //document.write('Eres Español')
//} //else if(pais=='Mexico') {
    //document.write('Eres mexicano')
//} //else{
    //document.write('No sabemos de donde eres')
//}

var pais ='España'

switch(pais){
    case 'Mexico':
    document.write('Eres Mexicano')
    break
    case 'España':
    document.write('Eres Español')
    break
    case 'Colombia':
    document.write('Eres Colombiano')
    break
    default:
    document.write('No sabemos de donde eres')
    break
}