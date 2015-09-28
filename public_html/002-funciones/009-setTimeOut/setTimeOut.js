var botones = document.getElementsByClassName('btn');
botones[0].onclick = dia;
botones[1].onclick = tarde;
botones[2].onclick = noche;

function dia() {
     document.getElementsByClassName('saludo')[0].style.opacity = '1';
    document.getElementsByClassName('saludo')[0].className = 'saludo dia';
    document.getElementsByClassName('saludo')[0].innerHTML = 'Buenos Dias';
    setTimeout(ocultar, 2000);
}
function tarde() {
     document.getElementsByClassName('saludo')[0].style.opacity = '1';
    document.getElementsByClassName('saludo')[0].className = 'saludo tarde';
    document.getElementsByClassName('saludo')[0].innerHTML = 'Buenas tardes';
    setTimeout(ocultar, 2000);
}
function noche() {
     document.getElementsByClassName('saludo')[0].style.opacity = '1';
    document.getElementsByClassName('saludo')[0].className = 'saludo noche';
    document.getElementsByClassName('saludo')[0].innerHTML = 'Buenas noches';
    setTimeout(ocultar, 2000);
}

function ocultar(){
     document.getElementsByClassName('saludo')[0].style.opacity = '0';
}