
document.write("<h2>OP. ASIGNACIÓN (=) (+=) (-=)</h2>");

//(=)
var a = 3;
var b = 2;
document.write("<p>Las variables valen "+a+" y "+b+"</p>");

//(+=)
a+=4;
document.write("<p>Las variables valen "+a+" y "+b+"</p>");

//(-=)
b-=1;
a-=b;
document.write("<p>Las variables valen "+a+" y "+b+"</p>");

//////////////////////////////////////////////////////////////////////

document.write("<h2>OP. AUTOINCREMENTO (++) (--)</h2>");

//sobreescribimos el valor de a
a=10;
b=a++;
document.write("<p>Las variables valen "+a+" y "+b+"</p>");
document.write("<p>Las variables valen "+(++a)+" y "+(--b)+"</p>");


//////////////////////////////////////////////////////////////////////

document.write("<h2>OP.AUTOINCREMENTO (+) (-) (*) (*)</h2>");
var a = 2;
var b = 5;
var c = 8;
var d = '8';
document.write("<p>a+b+c = "+ (a+b+c) +"</p>");
document.write("<p>a-b-c = "+ (a-b-c) +"</p>");
document.write("<p>a*b*c = "+ (a*b*c) +"</p>");

document.write("<p>El resto de dividir 10 % 2 da un valor de tipo <span>" + typeof(a) + "</span></p>");

//////////////////////////////////////////////////////////////////////

document.write("<h2>OP.COMPARACIÓN (<, > )</h2>");

document.write("<p>El número B es mayor que C " + typeof(b>c));
console.log("La comparación B es mayor que C da como resultado " + typeof(b>c));
document.write("<p>Al comparar los valores y tipos de dos variables usamos el comparador === (c===d) "+(c===d));


///////////////////////////////////////////////////////////////////////

document.write("<h2>OP. AGRUPACIONES DE COMPARACIONES (<, > )</h2>");

document.write("<p>"+((a<=b)&&(b<c)) +"</p>");






