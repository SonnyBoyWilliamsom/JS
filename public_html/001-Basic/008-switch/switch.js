//switch = Instrucciones de control
var posDia = new Date().getDay();
var nameDia;

switch (posDia){
    case 0:
        nameDia = "Domingo";
        break;
    
    case 1:
        nameDia = "Lunes";
        break;
    
    case 2:
        nameDia = "Martes";
        break;
    
    case 3:
        nameDia = "Miércoles";
        break;
    
    case 4:
        nameDia = "Jueves";
        break;
    
    case 5:
        nameDia = "Viernes";
        break;
    
    case 6:
        nameDia = "Sábado";
        break;

    default:
        nameDia = "No se reconoce el día";
        break;
    
    
}

document.getElementById('switchDia').innerHTML = nameDia;
document.getElementById('switchDiaAuto').innerHTML = Date();

function getPet(mascota){
    var edad = prompt('¿Qué edad tiene?');
    edad = parseInt(edad);
    var msg;
    switch (mascota){
        case 0:
            if(edad == 0 || edad == 3){
                msg = 'perrito cachorro';
            }else if(edad > 2 && edad < 10){
                console.log('dentro segundo if');
                msg = 'perro adulto';
            }else if(edad >= 10 && edad <= 14){
                msg = 'perro viejo';
            }else{
                msg = 'perro no vivo';
            }
        break;
        case 1:
            if(edad <=1 && edad <= 10){
                msg = 'caballo joven';
            }else if(edad < 10 && edad <= 20){
                msg = 'caballo adulto';
            }else{
                msg = 'caballo no vivo';
            }
        break;
        case 2:
            if(edad <=1 && edad <= 100){
                msg = 'Tortuga joven';
            }else if(edad > 100){
                msg = 'Tortuga centenaria';
            }else{
                msg = 'tortuga no vivo';
            }
        break;
    default:
        msg = 'animal no catalogado'
        break;
    }
    document.getElementById('mascota').innerHTML = 'Tienes un ' + msg + '.';
    console.log(typeof(edad));
    console.log(mascota);
    console.log(edad);
}
