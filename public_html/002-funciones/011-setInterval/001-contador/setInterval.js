var h1 = document.getElementsByTagName('h1')[0];
var contador = 0;

//setInterval(nombre f(), milisegundos) = función que a su vez llama a otras de manera infinita cada X tiempo (establecido en milisegundos)

setInterval(contar,1000);
function contar(){
    h1.innerHTML = contador++;
}