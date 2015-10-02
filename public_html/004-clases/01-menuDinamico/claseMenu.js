/*Creación de un menu Dinámico*/

function elementMenu(link, title){
    this.enlace = link;
    this.titulo = title;
    
}

var home = new elementMenu('index.html','HOME');
var servicios = new elementMenu('servicios.html','SERVICIOS');
var contacto = new elementMenu('contacto.html','CONTACTO');

/*Para saber cuantos objetos tengo, se puede asignar cada uno de ellos a un array para poder recorerlo*/
var listaObjMenu = new Array(home, servicios, contacto);
var menuDinamico = document.getElementById('menuDinamico');

for(var i=0; i<listaObjMenu.length; i++){
    menuDinamico.innerHTML += "<li><a href='"+listaObjMenu[i].enlace+"'>"+listaObjMenu[i].titulo+"</a></li>";
}


/*Activar cada enlace que representa la página en la que nos encontramos. No podemos acceder al elemento className de listaObjMenu[i], ya que este atributo pertenece la etiqueta <a>, luego hemos de seleccionar dicha etiqueta para trabajar con ella:*/


var enlaces = menuDinamico.getElementsByTagName('a');

for(var i=0; i<enlaces.length; i++){
    if(enlaces[i].href === window.location.href){
        enlaces[i].className = 'activo';
    }
}