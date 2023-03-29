window.onload = function(){
    pantalla = document.getElementById("resultado")
}
x = "0";
xi = 1;
coma = 0;
ni = 0;
op = "no";
btnMostrar = false;
btn = "";
conV = 0;//0- no visible 1-visible
var pow = 0;

function numero(n){
    if(x == "0" || xi == 1){
        pantalla.innerHTML = n;
        x = n;
        if(n == "."){
            pantalla.innerHTML = "0.";
            x = n;
            coma = 1; 
        }
    }else{
        if(n == "." && coma == 0){
            pantalla.innerHTML+= n;
            x+= n;
            coma = 1;
        }else if (n == "." && coma == 1){}
        else{
            pantalla.innerHTML+= n;
            x+= n;
        }
    }
    xi = 0;
}
function operacion(s, p){

        resultado();
    
    ni = x;
    op = s;
    xi = 1;
    pow = p;
}
function resultado(){
    impConv()
    if(pow == 0){
        if(op == "no"){
            pantalla.innerHTML = x;
        }else{
            sl = ni + op + x;
            sol = eval(sl);
            pantalla.innerHTML = sol;
            x = sol;
            op = "no";
            xi = 1;
        }
        }else{
            if(op == "no")
                pantalla.innerHTML = x;
            else{
                res = Math.pow(ni,x)
                pantalla.innerHTML = res;
                x = res;
                op = "no";
                xi = 1;
            }
        }
}
function raiz(){
    x = Math.sqrt(x);
    pantalla.innerHTML = x;
    op = "no";
    xi = 1;
}
function porcentaje(){
    x = x/100;
    pantalla.innerHTML = x;
    igualar();
    xi = 1;
}
function opuesto(){
    nx = Number(x);
    nx =- nx;
    x = String(nx);
    pantalla.innerHTML = x;
}
function inve(){
    nx = Number(x);
    nx = (1/nx);
    x = String(nx);
    pantalla.innerHTML = x;
    xi = 1;
}
function retroceder(){
    cifras = x.length;
    br = x.substr(cifras-1,cifras);
    x = x.substr(0, cifras-1);
    if(x == "")x = "0";
    if (br == ".")coma=0;
    pantalla.innerHTML = x;
}
function borradoTotal(){
    pantalla.innerHTML = 0;
    x = "0";
    coma = 0;
    var p = document.getElementById('divconversion');
    if(p.style.display === "block"){
        p.style.display = "none"
    }
}
function limpiar(){
    pantalla.innerHTML = 0;
    x = "0";
    coma = 0;
    ni = 0;
    op = "no"
    var p = document.getElementById('conversion');
    if(p.style.display === "block"){
        p.style.display = "none"
    }
}

function fact(){
    var res = 1;
    for(var i = 1; i <= x; i++){
        res *= i;
    }
    pantalla.innerHTML = res;
}

//activa boton de funciones e intercambia botones shift
function btnOcultos(){
    var btnOcultos = document.getElementById('ocultos');
    var fn = document.getElementById('fn');
    
    
    btnOcultos.addEventListener('click', () =>{
        if(fn.style.display === "none"){
            fn.style.display = "block";
            divShift.style.display = "none";

        }else{
            fn.style.display = "none";
        }
    });
    var divShift = document.getElementById('shift');
    var shift1 = document.getElementById('sh1');
    var shift2 = document.getElementById('sh2');

    shift1.addEventListener('click', () =>{
        if(divShift.style.display === "none"){
            fn.style.display = "none";
            divShift.style.display = "block";
            
        }
    });
    shift2.addEventListener('click', () =>{
        if(divShift.style.display === "block"){
            fn.style.display = "block";
            divShift.style.display = "none";
            
        }
    });
    
}

function conversion(){
        
    var dConv = document.getElementById("divconversion");
        var bConv = document.getElementById("conv")
        
        bConv.addEventListener('click', () =>{
            if(dConv.style.display === "none"){
                dConv.style.display = "block"
                impConv()
            }else{
                dConv.style.display = "none"
            }
        });


}
function impConv(){
    var bin = parseInt(x,10).toString(2);
    var oct = parseInt(x,10).toString(8);
    var hex = parseInt(x,10).toString(16);
    
    var p = document.getElementById("convb");
    p.innerHTML = bin;
    p = document.getElementById("convo");
    p.innerHTML = oct;
    p = document.getElementById("convh");
    p.innerHTML = hex;
}
function trig(n){
    var resultado = 0;
    var r = 0;
    switch(parseInt(n)){
        case 1:
            if(r == 0)
                resultado = Math.sin(x);
            else 
        break;
        case 2:
            resultado = Math.cos(x);
        break;
        case 3:
            resultado = Math.tan(x);
        break;
        case 4:
            resultado = Math.log(x);
        break;
        case 5:
            resultado = Math.log10(x);
        break;
        case 6:
            resultado = Math.exp(x);
        break;
        case 7:
            resultado = Math.pow(x,2);
        break;
        case 8:
            resultado = Math.abs(x);
        break;
        case 9:
            resultado = Math.PI;
        break;
        case 10:
            resultado = Math.E;
        break;
        case 11:
            resultado = Math.cbrt(x);
        break;
        case 12:
            resultado = Math.asin(x);
        break;
        case 13:
            resultado = Math.acos(x);
        break;
        case 14:
            resultado = Math.atan(x);
        break;
        case 15:
            resultado = Math.sinh(x);
        break;
        case 16:
            resultado = Math.cosh(x);
        break;
        case 17:
            resultado = Math.tanh(x);
        break;
        case 18:
            resultado = Math.asinh(x);
        break;
        case 19:
            resultado = Math.acosh(x);
        break;
        case 20:
            resultado = Math.atanh(x);
        break;
        case 21:
            resultado = Math.pow(2, x);
        break;
        case 22:
            resultado = Math.pow(x,3);
        break;
    }
    x = resultado;
    pantalla.innerHTML = resultado;
}
