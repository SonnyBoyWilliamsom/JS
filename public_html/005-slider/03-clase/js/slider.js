
function Foto(src, alt, title){
    this.source = src;
    this.description = alt;
    this.titulo = title;
}

var f1 = new Foto('../img/foto1.jpg','foto very one','Foto One');
var f2 = new Foto('../img/foto2.jpg','foto very two','Foto Two');
var f3 = new Foto('../img/foto3.jpg','foto very three','Foto Three');

/*Para poder tener contabilizados los nuevos objetos que se han creado, los almacenamos en un array*/

var listaFotos = new Array(f1,f2,f3);

/*A partir de aqui podemos crear los elementos del slider inyectándolo en el html en js*/
var cont_divs = document.getElementById('content_divs');
for(var i=0; i<listaFotos.length; i++){
    cont_divs.innerHTML += '<div class="foto" style="background: url('+listaFotos[i].source+') no-repeat center; background-size: cover;"><h2>'+listaFotos[i].titulo+'</h2></div>';
    
    
}
var slider = document.getElementById('slider');
var cont_img = document.getElementById('content_divs');
var images = cont_img.getElementsByClassName('foto');
var cont_bullet = document.getElementById('content_bullets');
var bullets = document.getElementsByClassName('bullet');
/*Para poder llamar a una misma función un numero indeterminado de veces usamos la funcion de JS setInterval()*/

var intervalo = setInterval(moveSlider,4000);
var position = 0;
var pos_bullet = 0;
function moveSlider(){
    position += 100;
    if( position === images.length*100){
        position = 0;
    }
    cont_img.style.left = '-' + position + '%';
   
    /*Backgorund del bullet activo*/
    pos_bullet++; //Al igual que modificamos la posición de la imagen cada vez que se ejecuta la función moveSlider(), la posición del bullet aumenta acorde con ella
     console.log(images.length);
    for(var i=0;i<images.length; i++){//Recorremos todos los bullets
        console.log(pos_bullet);
        if(pos_bullet === images.length){
            pos_bullet = 0;
        }
        if(pos_bullet === i){//si la pos_bullet coincide con algún índice del bucle, significa que ese bullet es el que está 'acivo' en ese momento. Modificamos su background
            console.log('dentro for');
            bullets[i].style.background = 'teal';
        }else{
            bullets[i].style.background = '#fff';
        }
    }
    
}

/*Para el funcionamiento dinámico de los bullets*/
/*Cuando añadimos una nueva imagen con JS recalculamos el width del contenedor de las mismas, para un comportamiento dinámico. El anco varia en función de las imágenes*/

cont_bullet.style.width = (images.length*20)+((images.length-1)*5)+'px';
for(var i=0;i<images.length; i++){
    cont_bullet.innerHTML += '<div class="bullet" onclick=showImg('+ [i] +')></div>';
    images[i].width = (100/images.length)*100;
}

function showImg(a){
    position = (a*100)-100;

    moveSlider();
}

/*Para parar el slider cuando estamos encimade el: paramos su intervalo inicial, y despues lo reiniciamos, pero siempre se ha de trabajar con el mismo interval, por ello lo sobreescribimos en la misma variable:*/

slider.onmouseover = function(){
    clearInterval(intervalo);
}

slider.onmouseout = function(){
    intervalo = setInterval(moveSlider,4000);
}

/*Boton next=============================*/
//slider.innerHTML +='<div id="crtl_buttons"><div class="anterior" onclick="prev()" ><</div><div class="siguiente" onclick="next()">></div></div>';