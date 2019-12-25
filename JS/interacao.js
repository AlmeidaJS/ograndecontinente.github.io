var infoThorku;
var infoHaltar;
var infoIcaro;
var infoCleo;

window.onload = function(){
    infoThorku= document.getElementById("informa-thorku");
    infoHaltar= document.getElementById("informa-haltar");
    infoIcaro= document.getElementById("informa-icaro");
    infoCleo= document.getElementById("informa-cleo");

    var thorku= document.getElementById("thorku");
    thorku.onclick= mostraThorku;
    var haltar= document.getElementById("haltar");
    haltar.onclick= mostraHaltar;
    var icaro= document.getElementById("icaro");
    icaro.onclick= mostraIcaro;
    var cleo= document.getElementById("cleo");
    cleo.onclick= mostraCleo;
    
    infoThorku.classList.add("escondido");
    infoHaltar.classList.add("escondido");
    infoIcaro.classList.add("escondido")
    infoCleo.classList.add("escondido")
};

function mostraThorku(){
    infoThorku.classList.remove("escondido");
    infoHaltar.classList.add("escondido");
    infoIcaro.classList.add("escondido")
    infoCleo.classList.add("escondido")

    
};
function mostraHaltar(){
    infoThorku.classList.add("escondido");
    infoHaltar.classList.remove("escondido");
    infoIcaro.classList.add("escondido");
    infoCleo.classList.add("escondido");
};
function mostraIcaro(){
    infoThorku.classList.add("escondido");
    infoHaltar.classList.add("escondido");
    infoIcaro.classList.remove("escondido");
    infoCleo.classList.add("escondido");
};
function mostraCleo(){
    infoThorku.classList.add("escondido");
    infoHaltar.classList.add("escondido");
    infoIcaro.classList.add("escondido");
    infoCleo.classList.remove("escondido");
};