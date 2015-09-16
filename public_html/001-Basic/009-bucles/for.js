/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

for(var i=0;i<10;i++){
    document.getElementById('for').innerHTML += (i+1)+'.<a href="#">HOLA</a><br>'    
}

var cantidad = prompt('¿Cuantas repeticiones quieres?');
console.log(typeof(cantidad));
for(var i=0;i<cantidad;i++){
    document.getElementById('for2').innerHTML += (i+1)+'.<a href="#">HOLA</a><br>'    
}

var palabra = "supercalifragilisticoespialidoso";

for(var i=0;i < palabra.length;i++){
    if(i == 0){document.getElementById('for3').innerHTML = '<span style="color:red">' + palabra.charAt(i) + '</span><br>';
    }else{
    document.getElementById('for3').innerHTML += '<span>' + palabra.charAt(i) + '</span><br>';
}
}

