
var btn_menu = document.getElementById('btn_menu'); /*Elemento que acciona*/
var menu = document.getElementById('menu'); /*Elemento pasivo1*/
var mascara = document.getElementById('mascara'); /*elemento activo2*/
var viewport = document.getElementById('viewport'); 

btn_menu.onclick = function(){
    viewport.style.left = '350px';
    mascara.style.display = 'block';
    mascara.style.left = '350px';
}

mascara.onclick = function(){
    viewport.style.left = '0';
    mascara.style.display = 'none'; 
}