var msg = document.getElementsByTagName('h1')[0];
var tagBody = document.getElementsByTagName('body')[0];
var txt;
var period;

var fecha = new Date();
console.log(fecha);
 
 //Para seleccionar las horas, minutos o segundos accedemos a atributos del objeto Date()
 var hora = fecha.getHours();
 var minutos = fecha.getMinutes();
 
 if(hora >= 6 && hora<= 12){
    txt = '';
    period = 'morning';
 }else if(hora >= 13 && hora<= 18){
     txt = '';
    period = 'evening';
 }else{
     txt = '';
    period = 'night';
 }
 
 msg.innerHTML = txt;
 tagBody.className = period;


