var producto = document.getElementById("producto");
var precio = document.getElementById("precio");
var suma = document.getElementById("suma");
var lista = document.getElementById("lista");
var btnBorrar = document.getElementsByClassName("remove")[0];//Get elements by class name is an array
var total = 0;

//Comprobación de que el se introducen valores
function addProducto() {
    var prod = producto.value;
    var price = parseInt(precio.value);

    if (prod.trim() == ""){//con trim, nos evitamos que si se introducen solo espacios se considere un valor valido
        alert("Debes introducir producto");
        producto.focus();
    } else if (price == 0 || isNaN(price)){
        alert("Debes introducir precio válido");
        precio.focus();
        precio.value = "";
    } else {
        //Mostrar los productos en forma de lista
        lista.innerHTML += "<li>" + prod + " | " + price + "</li>";
        //Sumar todos los valores
        total += price;
        suma.innerHTML = total;
        //Limpiar los inputs para facilitar la entrada de nuevos valores
        producto.value = ""; 
        precio.value = ""; 
        producto.focus();
        //Se muestra la opción 
        btnBorrar.style.display = "inline-block";
    }
}

function borrar(){
    lista.innerHTML = "";
    suma.innerHTML = 0;
       producto.focus();
}

function change(){
    var title = document.getElementById("titulo");
    title.style.color = "#cdcdcd";
}