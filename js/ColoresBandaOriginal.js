var bandas = [];
var i = 0;
var l = 0
function Colores(numColor){
    
    if(l == 4 || l == 5 || l == 6)
        bandas.length = 0

    var newDiv = document.createElement("div");//crea el elemento
    var newContent = document.createTextNode("Colores");//crea un texto que estara en el elemento
    newDiv.appendChild(newContent);//agrega el texto al elemento

    var nomC=nombreColor(numColor);

    var newP = document.createElement("p");
    var newColor = document.createTextNode(nomC);
    newP.appendChild(newColor);
    var colorB = defineColor (numColor);
    newP.style = "border: 1px solid #999999; background-color:"+colorB +"; width: 90px; height: 30px";
    newDiv.style = "display: inline-block;"
    bandas[i] = parseInt(numColor);
    i++;

    document.body.appendChild(newDiv);
    document.body.appendChild(newP);

    


}

//solo serviviria para las bandas 1 a la 3, se ocupan otras escalas entonces se ocupa otra funcion
function defineColor(n){
    switch (parseInt(n)){
        case 0: return "rgb(122,128,121)";
        case 1: return "rgb(161,75,4)";
        case 2: return "rgb(255,0,0)";
        case 3: return "rgb(255,115,0)";
        case 4: return "rgb(235,252,7)";
        case 5: return "rgb(15,252,7)";
        case 6: return "rgb(32,7,252)";
        case 7: return "rgb(154,7,252)";
        case 8: return "rgb(75,75,75)";
        case 9: return "rgb(255,255,255)";
        case 10: return "rgb(226,223,6)";
        case 11: return "rgb(167,167,167)";

    }
}

function nombreColor(n){
    switch (parseInt(n)){
        case 0: return "NEGRO";
        case 1: return "CAFE";
        case 2: return "ROJO";
        case 3: return "NARANJA";
        case 4: return "AMARILLO";
        case 5: return "VERDE";
        case 6: return "AZUL";
        case 7: return "VIOLETA";
        case 8: return "GRIS";
        case 9: return "BLANCO";
        case 10: return "ORO";
        case 11: return "PLATA";
    }
}

function calcula(){
    var tol = 0;
    var res = 0;
    var ppm = 0;
    var msg = "";
    var msg2 = "";
    var msg3 = "";
    var br = document.createElement("br")
    switch(bandas.length){
        case 4:
            res = parseFloat((bandas[0]*bandas[2]) + (bandas[1]*(bandas[2]/10)));
            tol = toleranciaB(bandas[3]);
            l = 4;
            //alert(parseInt(bandas[3]))
            //bandas.splice(0,bandas.length)
            msg = "Valor de la resistencia : " + res;
            msg2 = "Tolerancia : "+ tol; 
        break;
        case 5:
            for(var j = 0; j<bandas.length; j++){
                console.log(bandas[j])
            }
            //res = parseFloat((bandas[1]*bandas[3]) + (bandas[2]*bandas[3]/10) + (bandas[0]*bandas[3]));
            res = parseFloat((bandas[1]*bandas[3]))
            tol = toleranciaB(bandas[4]);
            l = 5;
            //bandas.splice(0,bandas.length)
            msg = "Valor de la resistencia : " + res ;
            msg2 = " Tolerancia : "+ tol;
        break;
        case 6:
            res = parseFloat(((bandas[0]*100) + (bandas[1]*10) + bandas[2]) * Math.pow(10,bandas[3]));
            //resultado = parseFloat((bandas[0]*100))
            tol = toleranciaB(bandas[4]);
            ppm = ppml(bandas[5]);
            l = 6;
            //bandas.splice(0,bandas.length)
            msg = " Valor de la resistencia : " + res 
            msg2 = " Tolerancia : "+ tol ;
            msg3 = " Coeficiente : " + ppm;
        break;
    }

    //alert(msg)

    var newDiv2 = document.createElement("div");
    var newContent2 = document.createTextNode("Resultado")
    newDiv2.appendChild(newContent2);

    var newP = document.createElement("p");
    var newTxt = document.createTextNode(msg);
    newP.appendChild(newTxt);
    newP.appendChild(br);

    newtxt = document.createTextNode(msg2);
    newP.appendChild(newtxt);
    newP.appendChild(br);

    newtxt = document.createTextNode(msg3);
    newP.appendChild(newtxt)

    document.body.appendChild(newDiv2);
    document.body.appendChild(newP)
}
function ppml(b6){
    switch (parseInt(b6)){
        case 1: return "100ppm";
        case 3: return "25ppm";
        case 4: return "10ppm";
        case 6: return "10ppm";
        case 7: return "5ppm";
    }
}

function toleranciaB(b){
    switch(parseInt(b)){
        case 1: return "1%";
        case 2: return "2%";
        case 5: return "0.5%";
        case 6: return "0.25%";
        case 7: return "0.1%";
        case 8: return "0.05%";
        case 10: return "5%";
        case 11: return "10%";
        default: return "0";
    }
}
