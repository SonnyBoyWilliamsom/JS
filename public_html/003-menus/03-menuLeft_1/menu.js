
var btn_menu = document.getElementById('btn_menu'); /*Elemento que acciona*/
var menu = document.getElementById('menu'); /*Elemento pasivo1*/
var mascara = document.getElementById('mascara'); /*elemento activo2*/

btn_menu.onclick = function(){
    menu.style.left = '0';
    mascara.style.display = 'block'; 
}

mascara.onclick = function(){
    menu.style.left = '-350px';
    mascara.style.display = 'none'; 
}