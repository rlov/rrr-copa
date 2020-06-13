
var contenedorLightBox = document.getElementsByClassName("light-box-contenedor")[0],
    imagenesPerfil = document.querySelectorAll(".main .contenedor-foto-perfil a img"),
    imagenLightBox = document.querySelector(".light-box-contenedor .light-box-foto img"),
    btnIzqLightBox = document.querySelector(".light-box-contenedor .light-box-foto .fa-arrow-left"),
    btnDerLightBox = document.querySelector(".light-box-contenedor .light-box-foto .fa-arrow-right");

imagenesPerfil.forEach((img) => {
    img.addEventListener("click", (e) => {
        document.body.style.overflow = "hidden";
        //Obtenemos el nodo padre a
        let nodoPadre = e.target.parentNode;
        //Obtenemos el href del elemento a
        let href = nodoPadre.getAttribute("href");
        //Obtenemos la ruta de la imagen
        let src = e.target.getAttribute("src");
        //Debemos obtener el id, que resulta de borrar el "#" del href
        let idLightBox = href.substring(1, href.length);

        //Ahora tendremos que modificar el contenedor-light-box para cada imagen
        contenedorLightBox.setAttribute("id", idLightBox);
        imagenLightBox.setAttribute("src", src);

        let enlaceIzquierdo, enlaceDerecho;
        //De los href eliminaremos el "#fotoPerfil"
        let hrefRecortado = parseInt(href.replace("#fotoPerfil", ""));
        let hrefIzquierdo = hrefRecortado - 1;
        let hrefDerecho = hrefRecortado + 1;

        if (hrefDerecho > imagenesPerfil.length) {
            hrefDerecho = 1;
            enlaceDerecho = "#fotoPerfil" + hrefDerecho;
            btnDerLightBox.parentNode.setAttribute("href", enlaceDerecho);
        }
        else {
            enlaceDerecho = "#fotoPerfil" + hrefDerecho;
            btnDerLightBox.parentNode.setAttribute("href", enlaceDerecho);
        }
        if (hrefIzquierdo == 0) {
            hrefIzquierdo = imagenesPerfil.length;
            enlaceIzquierdo = "#fotoPerfil" + hrefIzquierdo;
            btnIzqLightBox.parentNode.setAttribute("href", enlaceIzquierdo);
        }
        else {
            enlaceIzquierdo = "#fotoPerfil" + hrefIzquierdo;
            btnIzqLightBox.parentNode.setAttribute("href", enlaceIzquierdo);
        }

    });
});


btnIzqLightBox.addEventListener("click", (e) => {
    let padreBoton = e.target.parentNode;
    let eI = padreBoton.getAttribute("href");
    let id = eI.substring(1, eI.length);
    let numero = parseInt(eI.replace("#fotoPerfil", ""));
    let numeroMenos = numero - 1;
    let nuevoHref = "#fotoPerfil" + numeroMenos;
    let numeroMas = numero + 1;
    let padreBotonDerecho = btnDerLightBox.parentNode;
    let hrefpadreBotonDerecho = "#fotoPerfil" + numeroMas;
    let nuevoSRC;

    if (numeroMenos == 0) {
        numeroMenos = imagenesPerfil.length;
        nuevoHref = "#fotoPerfil" + numeroMenos;
    }
    if (numeroMas > imagenesPerfil.length) {
        numeroMas = 1;
        hrefpadreBotonDerecho = "#fotoPerfil" + numeroMas;
    }

    imagenesPerfil.forEach((img) => {
        let padreImg = img.parentNode;
        let hrefPadre = padreImg.getAttribute("href");
        if (hrefPadre == eI) {
            nuevoSRC = img.getAttribute("src");
            imagenLightBox.setAttribute("src", nuevoSRC);
            contenedorLightBox.classList.add("activo");
            padreBoton.setAttribute("href", nuevoHref);
            padreBotonDerecho.setAttribute("href", hrefpadreBotonDerecho);
        }
    });

});

btnDerLightBox.addEventListener("click", (e) => {
    let padreBoton = e.target.parentNode;
    let eI = padreBoton.getAttribute("href");
    let id = eI.substring(1, eI.length);
    let numero = parseInt(eI.replace("#fotoPerfil", ""));
    let numeroMas = numero + 1;
    let nuevoHref = "#fotoPerfil" + numeroMas;

    let numeroMenos = numero - 1;
    let padreBotonIzquierdo = btnIzqLightBox.parentNode;
    let hrefpadreBotonIzquierdo = "#fotoPerfil" + numeroMenos;

    let nuevoSRC;

    if (numeroMas > imagenesPerfil.length) {
        numeroMas = 1;
        nuevoHref = "#fotoPerfil" + numeroMas;
    }
    if (numeroMenos == 0) {
        numeroMenos = imagenesPerfil.length;
        hrefpadreBotonIzquierdo = "#fotoPerfil" + numeroMenos;
    }

    imagenesPerfil.forEach((img) => {
        let padreImg = img.parentNode;
        let hrefPadre = padreImg.getAttribute("href");
        if (hrefPadre == eI) {
            nuevoSRC = img.getAttribute("src");
            imagenLightBox.setAttribute("src", nuevoSRC);
            contenedorLightBox.classList.add("activo");
            padreBoton.setAttribute("href", nuevoHref);
            padreBotonIzquierdo.setAttribute("href", hrefpadreBotonIzquierdo);
        }
    });
});


var botonCerrarLightBox = document.getElementById("btn-cerrar-light-box");
botonCerrarLightBox.addEventListener("click", (e) => {
    document.body.style.overflow = "auto";
    contenedorLightBox.classList.remove("activo");
});

contenedorLightBox.addEventListener("click", (e) => {
    e.target.id === "light-box-contenedor" ? contenedorLightBox.classList.remove("activo") : "";
    console.log(e.target.id);
});

var botonOpcionesPublicacion = document.getElementById("boton-opciones-publicacion"),
    ventanOpcionesPublicacion = document.getElementById("mas-opciones-publicacion");

botonOpcionesPublicacion.addEventListener("mouseover", (e) => {
    setTimeout(() => {
        ventanOpcionesPublicacion.classList.add("activo");
    }, 300);
});

ventanOpcionesPublicacion.addEventListener("mouseleave", (e) => {
    ventanOpcionesPublicacion.classList.remove("activo");
});

/*Agregando carrusel de imagenes*/

const btnIzqCarrusel = document.getElementById("carrusel-izquierdo");
const btnDerCarrusel = document.getElementById("carrusel-derecho");
const carrusel = document.getElementById("carrusel");

btnDerCarrusel.addEventListener("click", (e) => {
    carrusel.scrollLeft += carrusel.offsetWidth;
    let ind = document.querySelector(".contenedor-indicadores .activo");
    if (ind.nextSibling) {
        ind.nextSibling.classList.add("activo");
        ind.classList.remove("activo");
    }

    else {
        carrusel.scrollLeft = 0;
        ind.classList.remove("activo");
        document.querySelectorAll(".contenedor-indicadores button")[0].classList.add("activo");
    }
});

btnIzqCarrusel.addEventListener("click", (e) => {
    carrusel.scrollLeft -= carrusel.offsetWidth;
    let ind = document.querySelector(".contenedor-indicadores .activo");
    if (ind.previousSibling) {
        ind.previousSibling.classList.add("activo");
        ind.classList.remove("activo");
    }
});

/**
 * PAGINACIÓN---------------------------------->
 */

const imagenesCarrusel = document.querySelectorAll(".carrusel-imagenes .foto");

const indicadoresCarrusel = Math.ceil(imagenesCarrusel.length / 5);
const contenedorIndic = document.getElementById("contenedor-indicadores");

for (let i = 0; i < indicadoresCarrusel; i++) {
    let indicador = document.createElement("button");

    if (i === 0) {//El primer indicador
        indicador.classList.add("activo");
    }
    contenedorIndic.appendChild(indicador);
    indicador.addEventListener("click", (e) => {//Si hay un elemento hermano a continuación te devuelve true
        carrusel.scrollLeft = i * carrusel.offsetWidth;
        document.querySelector(".contenedor-indicadores .activo").classList.remove("activo");
        indicador.classList.add("activo");

    });
}


//COMENTARIO DE FOTOS MODAL

const inputComentario = document.getElementById("mi-comentario");

var codigo;
inputComentario.addEventListener("keypress", (e) => {
    codigo = e.keyCode;
    //Obtenemos el comentario
    let comentario = e.target.value;
    if (codigo == 13) {
        //Entonces se presiono enter
        let contenedorNuevoComentario = document.createElement("div");
        contenedorNuevoComentario.setAttribute("class", "nuevo-comentario");

        let usuario_foto = document.createElement("div");
        usuario_foto.setAttribute("class","usuario-foto");

        let imagen = document.createElement("img");
        imagen.setAttribute("src","../imagenes/fotoPerfil.jpg");

        let nombre = document.createElement("p");
        nombre.innerHTML = "Olivares Ventura";

        usuario_foto.appendChild(imagen);
        usuario_foto.appendChild(nombre);
        contenedorNuevoComentario.appendChild(usuario_foto);
        
        let comentario_propietario_publicacion = document.createElement("div");
        comentario_propietario_publicacion.setAttribute("class","comentario-propietario-publicacion");

        let pComentario = document.createElement("p");
        pComentario.innerHTML =  comentario;

        comentario_propietario_publicacion.appendChild(pComentario);
        contenedorNuevoComentario.appendChild(comentario_propietario_publicacion);
        let nodoReferencia = document.getElementById("contenedor-mi-comentario");
        //Insertamos un nuevo elemento antes del nodo de referencia
        document.getElementById("padre-auxiliar").insertBefore(contenedorNuevoComentario,nodoReferencia);

        e.target.value = "";
    }
});