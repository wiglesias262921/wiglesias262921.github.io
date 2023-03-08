let menuVisible = false;
//Funcion que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciona una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica la animacion de las habilidades
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_habilidades = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_habilidades >=300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("sistemasoperativos");
        habilidades[3].classList.add("aplicacioneserp");
        habilidades[4].classList.add("operadordepc");
        habilidades[5].classList.add("reparaciondepcredes");
        habilidades[6].classList.add("servidores");
        habilidades[7].classList.add("trabajoenequipo");
        habilidades[8].classList.add("creatividad");
        habilidades[9].classList.add("dedicacion");
        habilidades[10].classList.add("resoluciondeproblemas");
        habilidades[11].classList.add("experiencia");
        habilidades[12].classList.add("trabajobajopresion");
        habilidades[13].classList.add("comunicacion");
    }
}

//Detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
efectoHabilidades();
}