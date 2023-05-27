// funcion para el seleccionador del menu

function seleccionar(link){
    var opciones = document.querySelectorAll('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    // para que no se vea el menu al seleccionar
    var x = document.getElementById("nav");
    x.className = "";
}

//menu responsive

function responsiveMenu () {
    var x = document.getElementById ("nav");
    if (x.className==="") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

//reinicio barra de habilidades

window.onscroll = function(){
    efectoHabilidades()
};

function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        document.getElementById("html").classList.toggle("barra-progreso1");
        document.getElementById("js").classList.toggle("barra-progreso2");
        document.getElementById("SQL").classList.toggle("barra-progreso3");
        document.getElementById("py").classList.toggle("barra-progreso4");
    }
}