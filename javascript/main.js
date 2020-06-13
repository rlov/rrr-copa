const barraBusqueda = document.getElementById("barra-busqueda"),
    resultadoBusqueda = document.getElementById("nav-personas-encontradas");
var esDispositivoMovil = () => window.innerWidth <= 800,
    contenedorBusqueda = document.getElementById("contenedor-busqueda");

barraBusqueda.addEventListener("click", () => {
    if (!esDispositivoMovil()) {
        resultadoBusqueda.classList.add("activo");

    }
});

contenedorBusqueda.addEventListener("mouseleave", () => {
    resultadoBusqueda.classList.remove("activo");
})

//MOSTRANDO SOLICITUDES DE AMISTAD EN EL NAV

var emojiSolicitudes = document.getElementById("nav-solicitudes"),
    ventanaSolicitudes = document.getElementById("nav-mostrando-solicitudes");

emojiSolicitudes.addEventListener("mouseover", (e) => {
    //Tenemos que mostrar la ventanite de solicitudes
    if (!esDispositivoMovil()) {
        ventanaMensajes.classList.remove("activo");
        ventanaNotificaciones.classList.remove("activo");
        ventanaSolicitudes.classList.add("activo");
        emojiMensajes.style.color = "white";
        emojiNotificaciones.style.color = "white";
        emojiSolicitudes.style.color = "skyblue";
    }
});


ventanaSolicitudes.addEventListener("mouseleave", (e) => {
    if (!esDispositivoMovil()) {
        ventanaSolicitudes.classList.remove("activo");
        emojiSolicitudes.style.color = "white";
    }
});

emojiSolicitudes.addEventListener("mouseleave", (e) => {
    ventanaSolicitudes.classList.remove("activo");
    emojiSolicitudes.style.color = "white";
})

//MOSTRANDO MENSAJES

var emojiMensajes = document.getElementById("nav-mensajes"),
    ventanaMensajes = document.getElementById("nav-mostrando-mensajes");

emojiMensajes.addEventListener("mouseover", (e) => {
    if (!esDispositivoMovil()) {
        ventanaSolicitudes.classList.remove("activo");
        ventanaNotificaciones.classList.remove("activo");
        emojiSolicitudes.style.color = "white";
        emojiNotificaciones.style.color = "white";
        emojiMensajes.style.color = "#7a08ec";
        ventanaMensajes.classList.add("activo");
    }
});

ventanaMensajes.addEventListener("mouseleave", (e) => {
    if (!esDispositivoMovil()) {
        ventanaMensajes.classList.remove("activo");
        emojiMensajes.style.color = "white";
    }
});

emojiMensajes.addEventListener("mouseleave", (e) => {
    ventanaMensajes.classList.remove("activo");
    emojiMensajes.style.color = "white";
})
//MOSTRANDO NOTIFICACIONES

var emojiNotificaciones = document.getElementById("nav-notificaciones"),
    ventanaNotificaciones = document.getElementById("nav-mostrando-notificaciones");

emojiNotificaciones.addEventListener("mouseover", (e) => {
    if (!esDispositivoMovil()) {
        ventanaSolicitudes.classList.remove("activo");
        ventanaMensajes.classList.remove("activo");
        ventanaNotificaciones.classList.add("activo");
        emojiMensajes.style.color = "white";
        emojiSolicitudes.style.color = "white";
        emojiNotificaciones.style.color = "orangered";
    }
});

ventanaNotificaciones.addEventListener("mouseleave", (e) => {
    if (!esDispositivoMovil()) {
        ventanaNotificaciones.classList.remove("activo");
        emojiNotificaciones.style.color = "white";
    }
});

emojiNotificaciones.addEventListener("mouseleave", (e) => {
    ventanaNotificaciones.classList.remove("activo");
    emojiNotificaciones.style.color = "white";
});

/*----------------------------------------->
TRABAJANDO CON MENÚ IZQUIERDO
-------------------------------------------->*/


const botonExpandirMenuIzquierda = document.getElementById("boton-expandir-izquierdo"),
    listaItemsMenuIzquierda = document.getElementById("lista-menu-izquierdo"),
    nombreItemMenuIzquierda = document.getElementById("nombre-item"),
    hijoBotonExpandirMenuIzquierda = document.querySelector("#boton-expandir-izquierdo .fas.fa-indent"),
    nuevoHijo = document.createElement("i");


botonExpandirMenuIzquierda.addEventListener("click", (e) => {
    //Establecemos un tiempo entre retraer y volver a su estado inicial
    // setTimeout(funcion,tiempo en milisegundos);
    if (!nombreItemMenuIzquierda.classList.contains("expandido")) {
        listaItemsMenuIzquierda.classList.add("retraer");
        menuIzquierdo.style.width = "300px";
        setTimeout(() => {
            nombreItemMenuIzquierda.classList.add("expandido");
            listaItemsMenuIzquierda.classList.remove("retraer");
            botonExpandirMenuIzquierda.removeChild(hijoBotonExpandirMenuIzquierda);
            nuevoHijo.setAttribute("class", "fas fa-times");
            botonExpandirMenuIzquierda.appendChild(nuevoHijo);
            if (esDispositivoMovil()) {
                document.body.style.overflow = "hidden";
                document.getElementById("menu-izquierdo").style.overflow = "scroll";
            }
        }, 300);
    }
    else {
        //Debemos volver todo a su lugar
        document.getElementById("menu-izquierdo").style.overflow = "hidden";
        listaItemsMenuIzquierda.classList.add("retraer");
        nombreItemMenuIzquierda.classList.remove("expandido");
        setTimeout(() => {

            listaItemsMenuIzquierda.classList.remove("retraer");
            botonExpandirMenuIzquierda.removeChild(nuevoHijo);
            botonExpandirMenuIzquierda.appendChild(hijoBotonExpandirMenuIzquierda);
            menuIzquierdo.style.width = "70px";

            if (esDispositivoMovil()) {
                document.body.style.overflow = "scroll";
                menuIzquierdo.classList.remove("expandirCelular");
            }
            else {
                document.getElementById("menu-izquierdo").style.overflow = "hidden";
            }

        }, 300);
    }
});

/**
 * TRABAJANDO CON MENU DERECHO
 */
var listaTotal = document.getElementById("lista-total");

listaTotal.addEventListener("mouseenter", (e) => {
    if (!esDispositivoMovil() && menuDerecho.classList.contains("expandido")) {
        listaTotal.style.overflow = "scroll";
    }
});

listaTotal.addEventListener("mouseleave", (e) => {
    if (!esDispositivoMovil()) {
        listaTotal.style.overflow = "hidden"
    }
});

var botonBarra = document.getElementById("boton-barra"),
    menuDerecho = document.getElementById("menu-derecho"),
    tituloAmigos = document.getElementById("titulo-amigos"),
    tituloFamilia = document.getElementById("titulo-familia"),
    pieMenuDerecho = document.getElementById("pie-menu-derecho"),
    busquedaAmigos = document.getElementById("buscar-amigos"),
    botonCerrarMenuDerecho = document.getElementById("boton-cerrar-menu-derecho");

botonBarra.addEventListener("click", (e) => {
    if (!esDispositivoMovil()) {
        menuDerecho.classList.add("retraer");
        setTimeout(() => {
            menuDerecho.classList.remove("retraer");
            menuDerecho.classList.add("expandido");
            tituloAmigos.classList.add("expandido");
            tituloFamilia.classList.add("expandido");
            pieMenuDerecho.classList.remove("retraer"),
                busquedaAmigos.classList.remove("retraer");
        }, 300);
    }
});

botonCerrarMenuDerecho.addEventListener("click", (e) => {
    if (!esDispositivoMovil()) {
        menuDerecho.classList.add("retraer");
        menuDerecho.classList.remove("expandido");
        setTimeout(() => {
            menuDerecho.classList.remove("retraer");
            tituloAmigos.classList.remove("expandido");
            tituloFamilia.classList.remove("expandido");
            pieMenuDerecho.classList.add("retraer");
            busquedaAmigos.classList.add("retraer");
        }, 300)
    }
})

var botonVentanaEmergenteMensaje = document.getElementById("boton-ventana-emergente"),
    ventanaEmergenteMensaje = document.getElementById("ventana-emergente-mensaje"),
    botonCerrarVentanaEmergenteMensaje = document.querySelector("#ventana-emergente-mensaje .titulo #boton-cerrar"),
    listaAmigosMenuDerecho = document.querySelectorAll(".menu-derecho .lista-total li"),
    imagenVentanaEmergente = document.querySelector("#ventana-emergente-mensaje .contenido img");

botonVentanaEmergenteMensaje.addEventListener("click", (e) => {
    ventanaEmergenteMensaje.classList.add("activo");
});

botonCerrarVentanaEmergenteMensaje.addEventListener("click", (e) => {
    ventanaEmergenteMensaje.classList.remove("activo");
});

listaAmigosMenuDerecho.forEach((elemento) => {
    elemento.addEventListener("click", (e) => {
        //Obtenemos el objeto sobre el que ocurrió el evento
        ventanaEmergenteMensaje.classList.add("activo");
    });
})

var botonLogoCelular = document.getElementById("logo-celular"),
    menuIzquierdo = document.getElementById("menu-izquierdo"),
    botonBarraCelular = document.getElementById("logo-menu-nav"),
    hijoBotonBarraCelular = document.querySelector("nav #logo-menu-nav .fas.fa-bars");

botonLogoCelular.addEventListener("click", (e) => {
    //Queremos mostrar el menú derecho
    if (esDispositivoMovil()) {

        if (!menuIzquierdo.classList.contains("expandirCelular")) {
            menuIzquierdo.classList.add("expandirCelular");
            menuIzquierdo.style.width = "300px";
            listaItemsMenuIzquierda.classList.add("retraer");
            setTimeout(() => {
                nombreItemMenuIzquierda.classList.add("expandido");
                listaItemsMenuIzquierda.classList.remove("retraer");
                botonExpandirMenuIzquierda.removeChild(hijoBotonExpandirMenuIzquierda);
                nuevoHijo.setAttribute("class", "fas fa-times");
                botonExpandirMenuIzquierda.appendChild(nuevoHijo);
                document.body.style.overflow = "hidden";
                document.getElementById("menu-izquierdo").style.overflow = "auto";
            }, 300);
        }
    }
});

botonBarraCelular.addEventListener("click", (e) => {
    if (esDispositivoMovil()) {

        if (!menuDerecho.classList.contains("expandido")) {

            hijoBotonBarraCelular.setAttribute("class", "fas fa-times");
            menuDerecho.classList.add("retraer");
            setTimeout(() => {
                menuDerecho.classList.remove("retraer");
                menuDerecho.classList.add("expandido");
                tituloAmigos.classList.add("expandido");
                tituloFamilia.classList.add("expandido");
                pieMenuDerecho.classList.remove("retraer"),
                    busquedaAmigos.classList.remove("retraer");
            }, 300);
            listaTotal.style.overflow = "scroll";
            document.body.style.overflow = "hidden";
        }
        else {
            hijoBotonBarraCelular.setAttribute("class", "fas fa-bars");
            menuDerecho.classList.add("retraer");
            menuDerecho.classList.remove("expandido");
            setTimeout(() => {
                menuDerecho.classList.remove("retraer");
                tituloAmigos.classList.remove("expandido");
                tituloFamilia.classList.remove("expandido");
                pieMenuDerecho.classList.add("retraer");
                busquedaAmigos.classList.add("retraer");
            }, 300)
            document.body.style.overflow = "scroll";
        }
    }
});

/**
 * PAGINA PERFIL-AMIGOS
 */


/**
 * OBTENIENDO TODOS LOS BOTONES Izquierdos- PAGINA-PERFIL-AMIGOS
 */

var botonesIzquierdosPerfilAmigos = document.querySelectorAll(".mini-perfil-amigo .botones-deslizar .boton-izq"),
    botonesDerechosPerfilAmigos = document.querySelectorAll(".mini-perfil-amigo  .botones-deslizar .boton-der"),
    contenedoresDeslizables1 = document.querySelectorAll(".mini-perfil-amigo .contenedor-deslizable .contenedor-1"),
    contenedoresDeslizables2 = document.querySelectorAll(".mini-perfil-amigo .contenedor-deslizable .contenedor-2");

botonesDerechosPerfilAmigos.forEach((botonDerecho) => {
    botonDerecho.addEventListener("click", (e) => {
        contenedoresDeslizables1.forEach((conte1) => {
            contenedoresDeslizables2.forEach((conte2) => {
                //VAMOS A COMPROBAR CUANDO EL DATA DEL BOTONIZQ ES IGUAL AL DEL CONTE1 Y CONTE2
                e.target.style.backgroundColor = "orangered";
                botonesIzquierdosPerfilAmigos.forEach((botonIzquierdo) => {
                    if (e.target.dataset.amigo == botonIzquierdo.dataset.amigo) {
                        botonIzquierdo.style.backgroundColor = "white";
                    }
                });

                if (e.target.dataset.amigo == conte1.dataset.amigo) {

                    if (e.target.dataset.amigo == conte2.dataset.amigo) {
                        //AHORA YA PODEMOS DESPLAZARLOS

                        conte1.classList.add("deslizar");
                        setTimeout(() => {
                            conte2.style.display = "inline-block";
                            conte1.style.display = "none";
                            conte2.classList.remove("deslizar");
                        }, 300);
                    }
                }
            });
        });
    });
});



botonesIzquierdosPerfilAmigos.forEach((botonIzquierdo) => {
    botonIzquierdo.addEventListener("click", (e) => {
        contenedoresDeslizables1.forEach((conte1) => {
            contenedoresDeslizables2.forEach((conte2) => {
                //VAMOS A COMPROBAR CUANDO EL DATA DEL BOTONIZQ ES IGUAL AL DEL CONTE1 Y CONTE2
                e.target.style.backgroundColor = "orangered";

                botonesDerechosPerfilAmigos.forEach((botonDerecho) => {
                    if (e.target.dataset.amigo == botonDerecho.dataset.amigo) {
                        botonDerecho.style.backgroundColor = "white";
                    }
                });

                if (e.target.dataset.amigo == conte1.dataset.amigo) {

                    if (e.target.dataset.amigo == conte2.dataset.amigo) {
                        //AHORA YA PODEMOS DESPLAZARLOS

                        e.target.style.backgroundColor = "orangered";
                        conte2.classList.add("deslizar");
                        setTimeout(() => {
                            conte1.style.display = "inline-block";
                            conte2.style.display = "none";
                            conte1.classList.remove("deslizar");
                        }, 300);
                    }
                }
            });
        });
    });
});

/**
 * VENTANA-MAS-OPCIONES-------------------------------------------->
 */
var botonMasOpciones = document.querySelectorAll(".mini-perfil-amigo .mas-opciones .fa-ellipsis-h"),
    ventanaMasOpciones = document.querySelectorAll(".mini-perfil-amigo .mas-opciones .ventana-opciones");


botonMasOpciones.forEach((boton) => {
    if (!esDispositivoMovil()) {
        boton.addEventListener("mouseover", (e) => {
            ventanaMasOpciones.forEach((ventana) => {
                if (e.target.dataset.opciones == ventana.dataset.opciones) {
                    ventana.classList.add("activo");
                }
            })
        });
    }
});

ventanaMasOpciones.forEach((ventana) => {
    ventana.addEventListener("mouseleave", (e) => {
        e.target.classList.remove("activo");
    });
})

/**
 * --------------------------------------------->
 */


/**
 * IMPLEMENTANDO MOSO OSCURO
 */

 var btnDesplegarOscuro = document.getElementById("desplegar-boton-oscuro"),
    btnModoOscuro = document.getElementById("boton-oscuro");

btnDesplegarOscuro.addEventListener("click",(e)=>{
    if(!e.currentTarget.classList.contains("rotar")){
        e.currentTarget.classList.add("rotar");
        btnModoOscuro.classList.add("desplegar");
        btnModoOscuro.classList.remove("normal");
    
    }
    else{
        e.currentTarget.classList.remove("rotar");
        btnModoOscuro.classList.remove("desplegar");
        btnModoOscuro.classList.add("normal");
    }
});

btnModoOscuro.addEventListener("click",(e)=>{
    btnModoOscuro.classList.toggle("activo");
    document.body.classList.toggle("dark");
});