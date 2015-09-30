/*Destacar el mensaje que aparece en la url*/

//1-Obtenemos la URL

var url = window.location.href;

//2-Comprobar y preguntar cual de los enlaces de la página apuntan a esa url

var enlaces = document.getElementsByTagName('header')[0].getElementsByTagName('nav')[0].getElementsByTagName('a');//array

for(var i=0;i<enlaces.length;i++){
    if(enlaces[i].href == url){
        enlaces[i].className = 'activo';
    }
}