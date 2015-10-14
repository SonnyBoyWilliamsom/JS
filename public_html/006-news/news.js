/*Selectores*/
var menu = document.getElementsByTagName('nav')[0].getElementsByTagName('ul')[0];

/*COntrolador*/
function Noticia(source, title, article, category, date){
    this.fuente = source;
    this.titulo = title;
    this.articulo = article;
    this.categoria = category;
    this.fecha = date;
}

var n1 = new Noticia("img/foto1.jpg","Titulo1","Artículo 1","Cultura","2015-10-06");
var n2 = new Noticia("img/foto2.jpg","Titulo2","Artículo 2","Ocio","2015-06-06");
var n3 = new Noticia("img/foto3.jpg","Titulo3","Artículo 3","Cultura","2015-08-06");
var n4 = new Noticia("img/foto1.jpg","Titulo4","Artículo 4","Ocio","2015-11-06");

var listNews = new Array(n1,n2,n3,n4);
var listadoCat = new Array();

/*MENU===========================*/

/*Creamos un listado de la categorias con un array. Para ello accedemos al atributo categoria de cada Noticia para con un bucle solo almacenar todos los tipos diferentes de categorias */

for(var i=0; i< listNews.length;i++){
    if(listadoCat.indexOf(listNews[i].categoria) == -1){
        listadoCat.push(listNews[i].categoria);
        menu.innerHTML += " <li><h1 onclick=listarNews('"+ listNews[i].categoria +"')>" + listNews[i].categoria + " </h1></li> ";
    }
}