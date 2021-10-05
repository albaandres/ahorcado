document.addEventListener

var palabra = document.getElementById("palabra");
var letra= document.getElementById("letra");
var aciertos= document.getElementById("aciertos");

palabra.addEventListener("blur", creaGuiones,true);
letra.addEventListener("keyup",buscaCarater,false);

var guiones;
function buscaCarater(){
    if(letra.value==""){
        return
    }
    var caracterbuscar=letra.value.toUpperCase();

    var posicion=palabraA.indexOf(caracterbuscar)
    var es_acierto=false;
    while(posicion>-1){
        guiones=guiones.substring(0,posicion) + caracterbuscar + guiones.substring
        (posicion+1, guiones.length);

        aciertos.value=guiones;

        posicion=palabraA.indexOf(caracterbuscar,posicion + 1);
        es_acierto=true;
        
    }
}

function creaGuiones(){
    guiones=palabra.value;

    guiones= palabra.replace(/[a-z]/gi,"-");

   // document.getElementById("aciertos").value
   aciertos.value=guiones;
}

