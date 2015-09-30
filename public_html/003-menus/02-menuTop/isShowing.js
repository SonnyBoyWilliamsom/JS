/*RESPONSIVE*/
/*----------  
 * html: en atributo media del link en el css
 * css: @import y @media
 * js: 
 * 
 * 
 */

var menu = document.getElementById('menu');
var boton = document.getElementById('btn_menu');

var isShowing = false;

boton.onclick = function(){
    if(!isShowing){
        menu.style.height = '196px';
         isShowing = true;
   }else{
        menu.style.height = '0px';
         isShowing = false;
   }
    
}

var url = window.location.href;
var activos = document.getElementById('menu').getElementsByTagName('a');

for(var i=0;i < activos.length; i++){
    if(activos[i].href == url){
        activos[i].className = 'activo';
    }    
}
    
    
