var botones = document.getElementsByClassName('btn');
botones[0].onclick = dia;
botones[1].onclick = tarde;
botones[2].onclick = noche;

function dia() {
    document.getElementsByClassName('saludo')[0].className = 'saludo dia';
    document.getElementsByClassName('saludo')[0].innerHTML = 'Buenos Dias';
}
function tarde() {
    document.getElementsByClassName('saludo')[0].className = 'saludo tarde';
    document.getElementsByClassName('saludo')[0].innerHTML = 'Buenas tardes';
}
function noche() {
    document.getElementsByClassName('saludo')[0].className = 'saludo noche';
    document.getElementsByClassName('saludo')[0].innerHTML = 'Buenas noches';
}