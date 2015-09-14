
var ag = prompt("Introduzca su edad");
age = parseInt(ag);
var msg = "No puedes pasar! Tiene " + age + " años";
if (age > 18) {
    msg = " Tiene " + age + " años. Adelante, puede pasar";
}
document.getElementById('edad').innerHTML = msg;

function play_pause(isPlaying){
   if (isPlaying === false) {
        msg = 'PLAY';
    }else{
        msg = 'PAUSE';
    }
    document.getElementById('reproductor').innerHTML = msg;
}

////////////////////////////////////////////////////////////////////////////////
//
//  Hacer ejercicio: según la procedencia mostraremos en pantalla el getilicio 
//  (Andaluz, Maño, Madrileño, Ciudadano del mundo)
//
////////////////////////////////////////////////////////////////////////////////

//Ejercicio de validación del DNI -> Cálculo de la letra del DNI: proceso matemático que se basa en obtener el resto de la división del número del DNI y el número 23. A partir del resto se obtiene la posición de la letra que le corresponde dentro del listado de datos (Array)-> numeroDNI%23

var letras = new Array('T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T');

var numDni = prompt('¿Cuál es tu DNI?', 'Sin letra');
var letra = prompt('¿Cuál es la letra tu DNI?');

if(numDni.length !=8){
    msg = "El DNI introducido " + numDni + " no es correcto. Debe introducir 8 dígitos";
}else{
    if(letras[numDni % 23]==letra){
        msg = "El DNI introducido " + numDni+letra + " es correcto";
    }else{
        msg = "El DNI introducido " + numDni+letra + " es incorrecto";
    }
}
 document.getElementById('dni').innerHTML = msg;
 
 ////////////////////////////////////////////////////////////////////////////////
 
var ans = prompt('¿¿Sabes de web?? S/N');
ans.toLowerCase();
if(ans === 's'){
    var ans = prompt('Junior o Senior');
    ans.toLowerCase();
    if(ans === 'junior'){
        msg = 'Te vamos a explotar un poquito';
    }else if(ans === 'senior'){
        msg = 'Te vamos a explotar a secas';
    }else{
        msg = 'Por favor especifique cualificación para poder explotarle con rigor';
    }
}else{
    var ans = prompt('Conocimientos?? (Gráfico/Marketing/Otros)');
    ans.toLowerCase();
    if(ans === 'gráfico'){
        msg = 'Eres un apasionado del arte práctico';
    }else if(ans === 'marketing'){
        msg = 'Eres un genio de ideas creativas';
    }else{
        msg = 'Eres de lo que no hay!';
    }
}
 document.getElementById('jobs').innerHTML = msg;
 document.getElementById('jobs').class = msg;




