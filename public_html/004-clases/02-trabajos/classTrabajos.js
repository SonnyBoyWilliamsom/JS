/*Creación de un menu Dinámico*/

function Trabajo(src, title, alt, category) {
    this.fuente = src;
    this.titulo = title;
    this.decripcion = alt;
    this.categoria = category;
}

var t1 = new Trabajo('img/web1.jpg', 'Web Construcción', 'Descripción 1', 'web');
var t2 = new Trabajo('img/web2.jpg', 'Web Agua', 'Descripción 2', 'web');
var t3 = new Trabajo('img/web3.jpg', 'Web Stetic', 'Descripción 3', 'web');
var t4 = new Trabajo('img/graphic1.jpg', 'Web Tipo', 'Descripción 4', 'graphic');
var t5 = new Trabajo('img/graphic2.jpg', 'Web Paul', 'Descripción 5', 'graphic');
var t6 = new Trabajo('img/graphic3.jpg', 'Web 60', 'Descripción 6', 'graphic');


/*Para saber cuantos objetos tengo, se puede asignar cada uno de ellos a un array para poder recorerlo*/
var listaObjTrabajo = new Array(t1, t2, t3, t4, t5, t6);
var sectionTrabajo = document.getElementById('trabajo');

/*FILTRADO DE TRABAJOS*/
mostrar('all');
function mostrar(tipo) {
    sectionTrabajo.innerHTML='';
    if (tipo === 'web' || tipo === 'graphic') {
        for (var i = 0; i < listaObjTrabajo.length; i++) {
            if(listaObjTrabajo[i].categoria === tipo){
                sectionTrabajo.innerHTML += "<article><img src='" + listaObjTrabajo[i].fuente + "' alt='" + listaObjTrabajo[i].descripcion + "'><span>" + listaObjTrabajo[i].titulo + "</span></article>";
            }

        }
    } else if (tipo === 'all') {
        for (var i = 0; i < listaObjTrabajo.length; i++) {
            sectionTrabajo.innerHTML += "<article><img src='" + listaObjTrabajo[i].fuente + "' alt='" + listaObjTrabajo[i].descripcion + "'><span>" + listaObjTrabajo[i].titulo + "</span></article>";
        }
    }
     
}

/*Activar cada enlace que representa la página en la que nos encontramos. No podemos acceder al elemento className de listaObjMenu[i], ya que este atributo pertenece la etiqueta <a>, luego hemos de seleccionar dicha etiqueta para trabajar con ella:*/


var botones = menuDinamico.getElementsByClassName('btn');

for (var i = 0; i < botones.length; i++) {
    if (botones[i].href === window.location.href) {
        botones[i].className += ' activo';
    }
}