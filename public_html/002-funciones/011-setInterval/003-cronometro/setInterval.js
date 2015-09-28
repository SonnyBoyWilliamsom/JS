var hora = document.getElementById('hora');
var min = document.getElementById('minutos');
var sec = document.getElementById('segundos');

var contHrs = 0;
var contMin = 0;
var contSec = 0;

setInterval(function(){
    if(contSec == 59){
        contSec = 0;
        min.innerHTML = contMin++;
        if(contMin == 59){
            contMin = 0;
            hora.innerHTML = contHrs++;
        }
    }
    sec.innerHTML = ++contSec;
 
   

},1000);