var imagenesVideo = document.querySelectorAll(".contenedor-video .imagen-video img");
var padre;
imagenesVideo.forEach((img)=>{
    img.addEventListener("mouseover",(e)=>{
        padre =  e.currentTarget.parentNode;
        padre.childNodes[3].classList.add("activo");
    });
});

var contenedorVideo = document.querySelectorAll(".main .contenedor-video");


contenedorVideo.forEach((elemento)=>{
    elemento.addEventListener("mouseleave",(e)=>{
        let activo = document.querySelector(".contenedor-video .imagen-video .imagen-hover.activo");
        activo.classList.remove("activo");
    });
});
/**
 * ULR IMAGENES
 */
var urlImagenes = [];

for(let i=0;i<imagenesVideo.length;i++){
    urlImagenes[i] = imagenesVideo[i].getAttribute("src");
}


var botonesPlay = document.querySelectorAll(".imagen-hover .boton-imagen-play"),
    contenedorModalVideo = document.getElementById("contenedor-modal-video"),
    contenedorVideo = document.getElementById("video-modal");


botonesPlay.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        contenedorVideo.innerHTML = "";
        let ruta =  e.currentTarget.dataset.video;
        contenedorModalVideo.classList.remove("retraer");
        contenedorModalVideo.classList.add("activo");

        let contenidoHTML =  "<video controls id='video'>   <source src ="+ ruta +" type='video/mp4' > </video>";
        contenedorVideo.innerHTML = contenidoHTML;

        for(let i=0; i<dataVideo.length;i++){
            if(ruta == dataVideo[i]){
                posicion = i;
            }
        }
        let rutaImagenActual =  urlImagenes[posicion];
        let contenido = "url('"+rutaImagenActual+"')";
        contenedorModalVideo.style.backgroundImage = contenido;

    });
});


/**
 * FUNCIONAMIENTO PARA LOS BOTONES IZQ Y DER
 */

 const btnIzqVideo = document.getElementById("btn-izquierdo-video");
 const btnDerVideo = document.getElementById("btn-derecho-video");
 const videoModal = document.getElementById("video-modal");

 var dataVideo = [];
 for(let i=0; i<botonesPlay.length; i++){
    dataVideo[i] = botonesPlay[i].dataset.video;
}

var v;
var posicion;
 btnIzqVideo.addEventListener("click",(e)=>{
    videoModal.classList.add("izquierda");
    document.getElementById("video").pause();
    //Primero debemos obtener todas las rutas las cuales están almacenadas en los atributo data
    setTimeout(()=>{
        v = document.querySelector(".contenedor-modal-video .video-modal source");
        //Ahora obtenemos el atributo src del elemento source;
        let src = v.getAttribute("src");
        for(let i=0; i<dataVideo.length;i++){
            if(src == dataVideo[i]){
                posicion = i;
            }
        }

        //Una vez que tengamos la posiciones al pretar boton izquierdo, entonces podemos ir hacia el elemento de la (posicion - 1)
        let contenido;
        let rutaImagenActual;
        if(posicion == 0){
            rutaImagenActual =  urlImagenes[urlImagenes.length-1];
            contenido = "<video controls id='video'> <source src ="+ dataVideo[dataVideo.length - 1] +" type='video/mp4' > </video>";
        }
        else{
            rutaImagenActual =  urlImagenes[posicion-1];
            contenido = "<video controls id='video'> <source src ="+ dataVideo[posicion-1] +" type='video/mp4' > </video>";
        }
        let contenidoImagen = "url('"+rutaImagenActual+"')";
        contenedorModalVideo.style.backgroundImage = contenidoImagen;

        contenedorVideo.innerHTML = contenido;
        videoModal.classList.remove("izquierda");
    },800);
        
 });

btnDerVideo.addEventListener("click",(e)=>{
    videoModal.classList.add("derecha");
    document.getElementById("video").pause();
    //Primero debemos obtener todas las rutas las cuales están almacenadas en los atributo data
    setTimeout(()=>{
        v = document.querySelector(".contenedor-modal-video .video-modal source");
        //Ahora obtenemos el atributo src del elemento source;
        let src = v.getAttribute("src");
        for(let i=0; i<dataVideo.length;i++){
            if(src == dataVideo[i]){
                posicion = i;
            }
        }
        //Una vez que tengamos la posiciones al pretar boton derecho, entonces podemos ir hacia el elemento de la (posicion + 1)
        let contenido;
        let rutaImagenActual;
        if(posicion == (dataVideo.length - 1)){
            rutaImagenActual =  urlImagenes[0];
            contenido = "<video controls id='video'> <source src ="+ dataVideo[0] +" type='video/mp4' > </video>";
        }
        else{
            rutaImagenActual =  urlImagenes[posicion+1];
            contenido = "<video controls id='video'> <source src ="+ dataVideo[posicion+1] +" type='video/mp4' > </video>";
        }
        let contenidoImagen = "url('"+rutaImagenActual+"')";
     // contenedorModalVideo.classList.add("opacidad");
        contenedorModalVideo.style.backgroundImage = contenidoImagen;

        contenedorVideo.innerHTML = contenido;
        videoModal.classList.remove("derecha");
    },800);
});

 var btnCerrarModalVideo =document.getElementById("btn-cerrar-modal-video");


btnCerrarModalVideo.addEventListener("click",(e)=>{
    contenedorModalVideo.classList.remove("activo");
    contenedorModalVideo.classList.add("retraer");
    document.getElementById("video").pause();
});


