
/*Elementos de trabajo*/
var sectionTrabajo = document.getElementById('trabajo');
var mascara = document.getElementById('mascara');
/*Creación de un menu Dinámico*/

function Trabajo(src, title, alt, category) {
    this.fuente = src;
    this.titulo = title;
    this.decripcion = alt;
    this.categoria = category;
}

var t1 = new Trabajo('img/china1.jpg', 'Web Construcción', 'Descripción 1', 'web');
var t2 = new Trabajo('img/china2.jpg', 'Web Agua', 'Descripción 2', 'web');
var t3 = new Trabajo('img/china3.jpg', 'Web Stetic', 'Descripción 3', 'web');
var t4 = new Trabajo('img/china4.jpg', 'Web Tipo', 'Descripción 4', 'graphic');
var t5 = new Trabajo('img/graphic2.jpg', 'Web Paul', 'Descripción 5', 'graphic');
var t6 = new Trabajo('img/graphic3.jpg', 'Web 60', 'Descripción 6', 'graphic');

/*Para saber cuantos objetos tengo, se puede asignar cada uno de ellos a un array para poder recorerlo*/
var listaObjTrabajo = new Array(t1, t2, t3, t4, t5, t6);

/*FILTRADO DE TRABAJOS*/
mostrar('all');
function mostrar(tipo) {
    sectionTrabajo.innerHTML = '';
    for (var i = 0; i < listaObjTrabajo.length; i++) {
        if (listaObjTrabajo[i].categoria === tipo || tipo === 'all' ) {
            sectionTrabajo.innerHTML += "<article ><img src='" + listaObjTrabajo[i].fuente + "' alt='" + listaObjTrabajo[i].decripcion + "'><span>" + listaObjTrabajo[i].titulo + "</span></article>";
        }
    }
}

/*Creacion de la FancyBox*/
var pickLinks = sectionTrabajo.getElementsByTagName('article');

console.log(pickLinks.length);

for (var i = 0; i < pickLinks.length; i++) {  //Para cada elemento creado se habilita el evento onclick, para mostrar la mascara
//    var ruta = listaObjTrabajo[i].fuente ;
//    console.log(ruta);
//    pickLinks[i].onclick = showPic;
    console.log(pickLinks[i].getElementsByTagName('img')[0]);
    pickLinks[i].getElementsByTagName('img')[0].onclick = showPic;
}
function showPic() {

    mascara.style.width = '100%';
    mascara.style.height = '100%';
    mascara.style.top = '0';
    mascara.style.opacity = '1';
    mascara.style.zIndex = '2';
    mascara.innerHTML = "<div class='fancyPic' style=' background: url(" + this.src + ") no-repeat center; max-width: 70%;height: 100%; margin: 0 auto; background-size: contain; position:relative;'><p style='  background: rgba(0,0,0,.8); position:absolute; bottom:0; width: 100%; color:#fff; text-align: center;font-size: 30px;'>"+this.alt+"</p></div>";
};

mascara.onclick = function() {
    mascara.style.width = '0%';
    mascara.style.height = '0%';
    mascara.style.top = '50vh';
    mascara.style.opacity = '0';
};
//Se crea la máscara que servirá para enfocar la imagen y también para cerrar la foto

//function fancyPicture(pos) {
//    mascara.style.width = '100%';
//    mascara.style.height = '100%';
//    mascara.style.top = '0';
//    mascara.style.opacity = '1';
//    mascara.style.zIndex = '2';
//    mascara.innerHTML = "<div class='fancyPic' style=' background: url("+listaObjTrabajo[pos].fuente+") no-repeat center; max-width: 70%;height: 100%; margin: 0 auto; background-size: contain; '></div>";
//}
