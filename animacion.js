let animado = document.querySelectorAll(".animacion");

function mostrarScroll(){
    let scrollTop = document.documentElement.scrollTop;
    for (let i = 0; i< animado.length; i++) {
        let alturaAnimado = animado[i].offsetTop;
        if(alturaAnimado -550 < scrollTop){
            animado[i].style.opacity = 1;
            animado[i].classList.add("mostrarArriba");
        }
    }
}

window.addEventListener("scroll", mostrarScroll);