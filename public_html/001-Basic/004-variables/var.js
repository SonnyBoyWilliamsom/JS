var nombre = 'Jairo David Guerrero Vasquéz';
//Definiendo un objeto
var nuemLetras = nombre.length;// con el atributo 'length' podemos obtener el número de caracteres del objeto al que acompaña
//alert(nuemLetras);
function get_date() {
    document.getElementById('fecha_hora').innerHTML = Date();
}

//FUNCIONES CON STRINGS
//Uppercase
var name = 'Jairo David Guerrero Vásquez';
var nameMay = name.toUpperCase();
document.getElementById("name").innerHTML = nameMay;

//Lowercase
document.write(name.toUpperCase().toLowerCase());

//objeto.charAt(X): función que devuelve la letra de la cadena 'objeto' en la posición X
document.write('<br>'+nombre.charAt(nombre.length-1));

//objeto.sustring(a,b): devuelve una subcadena de texto. Como parámetros de entrada tiene la posición de inicio y
var fichero = 'fichero.jpg';
document.write('<br>Substring: '+fichero.substring((fichero.length-3)));

//objeto.indexOf('X'): devuelve la posición que ocupa el carácter 'X' en una cadena 'objeto'. Si no está en la cadena devuelve -1.
var punto = fichero.indexOf('.')+1;
document.write('<br>Index of: '+fichero.substring((fichero.length-(fichero.length-punto))));

//objeto.lastIndexOf('X'): devuelve la posición que ocupa el carácter 'X' en una cadena 'objeto' buscado desde la derecha. Si no está en la cadena devuelve -1.
fichero = 'jairo.vasquez.guerrero.vasquez.fichero.jpg';
var punto = fichero.lastIndexOf('.')+1;
document.write('<br>Last index of: '+fichero.substring((fichero.length-(fichero.length-punto))));

//objeto.replace(search, replace): función para reemplazar en el 'objeto', 'search' por 'replace'. Es sensible a mayúsculas y minúsculas.
var texto = "El curso de JS es muy difícil";
document.write('<br>Replace: '+texto.replace('difícil', 'fácil'));