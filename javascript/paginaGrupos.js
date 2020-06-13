var botonMasOpcionesGrupos = document.querySelectorAll(".grupo .contenedor-mas-opciones .fa-ellipsis-h"),
    ventanaMasOpcionesGrupos = document.querySelectorAll(".grupo .contenedor-mas-opciones .mas-opciones");

botonMasOpcionesGrupos.forEach((boton) => {
    boton.addEventListener("mouseover", (e) => {
        ventanaMasOpcionesGrupos.forEach((v) => {
            if (e.target.dataset.opcion == v.dataset.opcion) {
                v.classList.add("activo");
            }
        });
    });
});

ventanaMasOpcionesGrupos.forEach((v) => {
    v.addEventListener("mouseleave", (e) => {
        e.target.classList.remove("activo");
    });
})


/**
 * VENTANA MODAL------------------------------------------>
 */

var btnCerrar = document.querySelector(".contenido-modal #btn-cerrar"),
    btnAgregarGrupo = document.getElementById("btn-crear-grupo"),
    contenidoModelo = document.getElementById("contenido-modal");
    ventanaModal = document.getElementById("ventana-modal");

btnAgregarGrupo.addEventListener("click", (e) => {
    ventanaModal.classList.add("aparecer");
    setTimeout(() => {
        //document.body.style.overflow = "hidden";
        contenidoModelo.classList.add("deslizar");
    }, 200);
});

btnCerrar.addEventListener("click", (e) => {
    contenidoModelo.classList.remove("deslizar");
    setTimeout(() => {
        ventanaModal.classList.remove("aparecer");
    }, 200);
})

ventanaModal.addEventListener("click",(e)=>{
    if(e.target.id == "ventana-modal"){
        contenidoModelo.classList.remove("deslizar");
        setTimeout(() => {
            ventanaModal.classList.remove("aparecer");
        }, 200);
    }
});