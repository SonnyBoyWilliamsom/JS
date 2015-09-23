//Otra manera de llamar a un evento de javascript se puede hacer de la siguiente fomra:

//-Acceder al elemento que va a ejecutar el evento:
var botones = document.getElementsByClassName("btn");//Que devuelve un array
var parrafoInicial = document.getElementsByClassName("parrafo")[0];
var claseInicial = parrafoInicial.className;
//Si queremos acceder el primer elemento y al segundo (que corresponden a los dos primeros botones) lo hacemos por posiciones del array que se ha obtenido previamente con getElementsByClass("btn"). Con las siguientes sentencias se accede al evento onclick()
botones[0].onclick = change;
botones[1].onclick = back;

function change() {
    if(parrafoInicial.className.match('nuevoParrafo') !== 'nuevoParrafo'){
        parrafoInicial.className += ' nuevoParrafo';
    }
}
function back() {
     parrafoInicial.className = claseInicial;
}