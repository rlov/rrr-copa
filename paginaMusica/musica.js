//Inicializamos los grid
const gridFavoritas = new Muuri(".grid-canciones-favoritas", {
    layout: {
        rounding: false
    }
});


const gridGeneros = new Muuri(".grid-generos", {
    layout: {
        rounding: false
    }
});

//Primero crearemos de manera dinámica todos los contenedores de las canciones

var arregloImagenes, arregloDataUrl, arregloDescripcion, arregloAutor;


arregloImagenes = [
    "../imagenes/imagenes-musica/portada-1.jpg",
    "../imagenes/imagenes-musica/portada-2.jpg",
    "../imagenes/imagenes-musica/portada-3.jpg",
    "../imagenes/imagenes-musica/portada-4.jpg",
    "../imagenes/imagenes-musica/portada-5.jpg",
    "../imagenes/imagenes-musica/portada-6.jpg",
    "../imagenes/imagenes-musica/portada-7.jpg",
    "../imagenes/imagenes-musica/portada-8.jpg",
    "../imagenes/imagenes-musica/portada-9.jpg",
    "../imagenes/imagenes-musica/portada-10.jpg",
    "../imagenes/imagenes-musica/portada-11.jpg",
    "../imagenes/imagenes-musica/portada-12.jpg",
    "../imagenes/imagenes-musica/portada-13.jpg",
    "../imagenes/imagenes-musica/portada-14.jpg",
    "../imagenes/imagenes-musica/portada-15.jpg",
    "../imagenes/imagenes-musica/portada-16.jpg",
    "../imagenes/imagenes-musica/portada-17.jpg",
    "../imagenes/imagenes-musica/portada-18.jpg",
    "../imagenes/imagenes-musica/portada-19.jpg",
    "../imagenes/imagenes-musica/portada-20.jpg",
    "../imagenes/imagenes-musica/portada-21.jpg",
    "../imagenes/imagenes-musica/portada-22.jpg",
    "../imagenes/imagenes-musica/portada-23.jpg",
    "../imagenes/imagenes-musica/portada-24.jpg",
    "../imagenes/imagenes-musica/portada-25.jpg",
    "../imagenes/imagenes-musica/portada-26.jpg",
    "../imagenes/imagenes-musica/portada-27.jpg",
    "../imagenes/imagenes-musica/portada-28.jpg",
    "../imagenes/imagenes-musica/portada-29.jpg",
    "../imagenes/imagenes-musica/portada-30.jpg",
    "../imagenes/imagenes-musica/portada-31.jpg",
    "../imagenes/imagenes-musica/portada-32.jpg",
    "../imagenes/imagenes-musica/portada-33.jpg",
    "../imagenes/imagenes-musica/portada-34.jpg",
    "../imagenes/imagenes-musica/portada-35.jpg",
    "../imagenes/imagenes-musica/portada-36.jpg",
    "../imagenes/imagenes-musica/portada-37.jpg",
    "../imagenes/imagenes-musica/portada-38.jpg",
    "../imagenes/imagenes-musica/portada-39.jpg",
    "../imagenes/imagenes-musica/portada-40.jpg"
]

arregloDataUrl = [
    "../audios/dragons.mp3",
    "../audios/remix.mp3",
    "../audios/prometo.mp3",
    "../audios/juanes.mp3",
    "../audios/thescript.mp3",
    "../audios/tufoto.mp3",
    "../audios/sabemos.mp3",
    "../audios/pedronavaja.mp3",
    "../audios/contaronmal.mp3",
    "../audios/estanoche.mp3",
    "../audios/faded.mp3",
    "../audios/astronomia.mp3",
    "../audios/bnet.mp3",
    "../audios/wosaczino.mp3",
    "../audios/truenomenor.mp3",
    "../audios/mivecinita.mp3",
    "../audios/simplementefutbol.mp3",
    "../audios/barcelona.mp3",
    "../audios/señorita.mp3",
    "../audios/dragonballgt.mp3",
    "../audios/dalex.mp3",
    "../audios/prum.mp3",
    "../audios/falsasmentiras.mp3",
    "../audios/take.mp3",
    "../audios/kush.mp3",
    "../audios/alone.mp3",
    "../audios/spectre.mp3",
    "../audios/sitedejas.mp3",
    "../audios/criminal.mp3",
    "../audios/bellaqueo.mp3",
    "../audios/diles.mp3",
    "../audios/ahoradice.mp3",
    "../audios/tebote.mp3",
    "../audios/rapgod.mp3",
    "../audios/china.mp3",
    "../audios/calma.mp3",
    "../audios/rehuso.mp3",
    "../audios/robartebeso.mp3",
    "../audios/situnovio.mp3",
    "../audios/darkside.mp3"
]

arregloDescripcion = [
    "Imagine",
    "Remix",
    "Prometo",
    "Mis planes son amarte",
    "The Script",
    "Tu foto",
    "Sabemos",
    "Pedro Navaja",
    "No te contaron mal",
    "Esta noche voy a llorar por última vez",
    "Faded",
    "Astronomy",
    "Bnet vs Valles-T",
    "Wos vs Aczino",
    "Trueno vs Menor",
    "Mi vecinita",
    "Simplemente futbol",
    "Barcelona",
    "Señorita",
    "Corazón Encantado",
    "Dalex - Remix",
    "Prum",
    "Falsas mentiras",
    "Take on me",
    "Krippy kush",
    "Alone",
    "Spectre",
    "Si te dejas llevar",
    "Criminal",
    "Bellaqueo",
    "Diles",
    "Ahora dice",
    "Te bote",
    "Rap god",
    "China",
    "Calma",
    "Me rehuso",
    "Robarte un beso",
    "Si tu novio te deja sola",
    "Darkside"
]

var arregloDataDescripcion = [];

for(let i=0;i<arregloDescripcion.length;i++){
    arregloDataDescripcion[i] = arregloDescripcion[i].toLowerCase();
}

arregloAutor = [
    "Dragons",
    "Anuel,Ozuna,Maluma,Nicky Jam",
    "Pablo Alborán",
    "Juanes",
    "Eminen",
    "Ozuna",
    "Mario Bautista",
    "Ruben Blades",
    "You salsa",
    "Orquesta Candela",
    "Alan Walker",
    "Tony Igy",
    "Red Bull 2019",
    "Red Bull 2018",
    "FMS 2019",
    "Plan B",
    "ESPN",
    "Barcelona",
    "Camila Cabello",
    "Dragon Ball GT",
    "Chencho",
    "Cosculluela",
    "Ozuna",
    "Metal Gear",
    "Bad Bunny ft Farruko",
    "Alan Walker",
    "Alan Walker",
    "Ozuna ft Juanka",
    "Ozuna ft Natti Natasha",
    "Ozuna ft alexio x juank",
    "Bad Bunny - Arcangel - Ozuna",
    "JBalvin - Anuel - Ozuna - Jedady",
    "Bad Bunny - Nicky Jam",
    "Eminen",
    "Anuel - Bad Bunny - KarolG",
    "Farruko ft Pedro Capó",
    "Danny Ocean",
    "Carlos Vives ft Yatra",
    "JBalvin ft Bad Bunny",
    "Alan Walker"
]

var arregloDataAutor = [];

for(let i=0;i<arregloAutor.length;i++){
    arregloDataAutor[i] = arregloAutor[i].toLowerCase();
}

const gridCancionesFavoritas = document.getElementById("grid-canciones-favoritas");



var nieto;

var itemGridCancionesFavoritas;
var contenedoresCanciones;

window.addEventListener("load", () => {
    for (let i = 0; i < arregloImagenes.length; i++) {
        let urlImagen = arregloImagenes[i];
        let urlAudio = arregloDataUrl[i];

        let item = document.createElement("div");
        item.setAttribute("class", "item");

        let contenedorCancion = document.createElement("div");
        contenedorCancion.setAttribute("class", "contenedor-cancion");

        let imagen = document.createElement("img");
        imagen.setAttribute("src", urlImagen);

        let descripcion = document.createElement("p");
        descripcion.setAttribute("class", "descripcion");
        descripcion.textContent = arregloDescripcion[i];

        let autor = document.createElement("p");
        autor.setAttribute("class", "autor");
        autor.textContent = arregloAutor[i];

        contenedorCancion.appendChild(imagen);
        contenedorCancion.appendChild(descripcion);
        contenedorCancion.appendChild(autor);

        item.appendChild(contenedorCancion);
        gridFavoritas.add(item);
        gridFavoritas.refreshItems().layout();
    }
    contenedoresCanciones = document.querySelectorAll(".grid-canciones-favoritas .item  .contenedor-cancion");
    escogerCancion();

    itemGridCancionesFavoritas = document.querySelectorAll(".contenedor-grid-canciones #grid-canciones-favoritas .item");
    let indice = 0;
    itemGridCancionesFavoritas.forEach((e)=>{
        e.setAttribute("data-descripcion",arregloDataDescripcion[indice]);
        indice++;
    });
    indice = 0;
    itemGridCancionesFavoritas.forEach((e)=>{
        e.setAttribute("data-autor",arregloDataAutor[indice]);
        indice++;
    });
});


//Obteniendo Input de busqueda
var inputBusqueda = document.getElementById("input-busqueda");

inputBusqueda.addEventListener("input",(e)=>{
    let valor = e.target.value;
    gridFavoritas.filter((item) => item.getElement().dataset.descripcion.includes(valor)); 
});

var inputCantante = document.getElementById("input-autor");

inputCantante.addEventListener("input",(e)=>{
    let valor = e.target.value;
    gridFavoritas.filter((item) => item.getElement().dataset.autor.includes(valor)); 
});


//Trabajando con el reproductor


var botonPlay, cancionAnterior, cancionSiguiente;

botonPlay = document.getElementById("boton-play");



var parrafoTiempoActual, parrafoTiempoTotal;

parrafoTiempoActual = document.getElementById("tiempo-actual");
parrafoTiempoTotal = document.getElementById("tiempo-total");

var audio = document.getElementById("audio");

function convertir(s) {
    let date = new Date(s * 1000);
    let minutos, segundos;

    minutos = date.getMinutes();
    segundos = date.getSeconds();

    if (minutos < 10) {
        minutos = "0" + minutos;
    }
    if (segundos < 10) {
        segundos = "0" + segundos;
    }

    return minutos + ":" + segundos;
}

audio.addEventListener("loadeddata", () => {
    let tiempoTotal = convertir(audio.duration);
    parrafoTiempoTotal.textContent = tiempoTotal;

    audio.volume = 0.5;
});

var seleccionoCancion = false;
var imagenReproduciendo = document.getElementById("imagen-reproduciendo");

var posicion;
//Evento para el botonPlay
var booleano = false;
botonPlay.addEventListener("click", (e) => {
    /*Debemos obtener la url de audio de cualquiera de las canciones
    por lo tanto vamos a recorrer el arreglo de url
    */
    if (audio.paused) {
        if (!seleccionoCancion && booleano == false) {
            posicion = parseInt(Math.random() * 40);

            let rutaAudio = arregloDataUrl[posicion];
            let rutaImagen = arregloImagenes[posicion];

            imagenReproduciendo.setAttribute("src", rutaImagen);

            audio.innerHTML = "<source src=" + rutaAudio + " type='audio/mp3'>";
            audio.play();
            booleano = true;
            //Vamos a recorrer el arreglo contenedoresCanciones
            contenedoresCanciones.forEach((e)=>{

            });

        }
        else{
            audio.play();
        }

        botonPlay.innerHTML = "<i class='fas fa-pause'></i>";
    }
    else {
        audio.pause();
        botonPlay.innerHTML = "<i class='fas fa-play'></i>";
    }

});



//Agregando evento a la barra de progreso

var contenedorBarraProgreso = document.getElementById("contenedor-barra-progreso");
var barraProgreso = document.getElementById("barra-progreso");

audio.addEventListener("timeupdate", () => {
    let ancho = contenedorBarraProgreso.clientWidth;
    let tiempoTotal = audio.duration;

    let tiempoActual = audio.currentTime;

    let n = parseInt((ancho * tiempoActual) / tiempoTotal);

    barraProgreso.style.width = n + "px";
    parrafoTiempoActual.textContent = convertir(tiempoActual);
});


contenedorBarraProgreso.addEventListener("click",(e)=>{
    let diferencia = e.pageX - contenedorBarraProgreso.offsetLeft;

    barraProgreso.style.width = diferencia + "px";

    let tiempoTotal = audio.duration;
    let ancho = contenedorBarraProgreso.clientWidth;

    let nuevoTiempo = ((diferencia*tiempoTotal)/ancho);

    audio.currentTime = nuevoTiempo;

});


//Agregando evento a la barra de volumen y al boton volumen

var contenedorBarraVolumen = document.getElementById("contenedor-volumen");
var barraVolumen = document.getElementById("volumen");


function anchoBarraVolumen() {
    let ancho = contenedorBarraVolumen.clientWidth;
    let n = parseInt(0.5 * ancho);
    barraVolumen.style.width = n + "px";
}

anchoBarraVolumen();

var equis;

contenedorBarraVolumen.addEventListener("click", (e) => {
    equis = e.pageX;
    let diferencia = e.pageX - contenedorBarraVolumen.offsetLeft;
    //Obtenemos el ancho del contenedorVolumen
    let ancho = contenedorBarraVolumen.clientWidth;
    let volumenNuevo = diferencia / ancho;

    barraVolumen.style.width = diferencia + "px";


});


//Ahora cuando seleccionemos una imagen tenemos que reproducirlo
var rutaPrueba;
function escogerCancion(){   
    contenedoresCanciones.forEach((contenedor) => {
        contenedor.addEventListener("click", (e) => {
           
            nieto = e.currentTarget.firstChild;
            let rutaImagen = nieto.getAttribute("src");
            imagenReproduciendo.setAttribute("src", rutaImagen);
            //Entonces el booleano cambiaría

            seleccionoCancion = true;
            /*Vamos a recorrer el arreglo de imagenes
            y la que coincide con la imagen que tenemos de ahí
            elegimos la ruta de audio*/
            for (let i = 0; i < arregloImagenes.length; i++) {
                if (rutaImagen == arregloImagenes[i]) {
                    posicion = i;
                }
            }

            rutaPrueba = arregloDataUrl[posicion];

            audio.pause();
            
            audio.innerHTML = "<source src=" + rutaPrueba + " type='audio/mp3'>";
            audio.load();
            audio.play();

            botonPlay.innerHTML = "<i class='fas fa-pause'></i>";
            let auxiliar = document.querySelector(".grid-canciones-favoritas .item  .contenedor-cancion.activo");
            if(auxiliar != null){
                auxiliar.classList.remove("activo");
            }
            e.currentTarget.classList.add("activo");
        });
    });
}

//Este evento ocurre cuando termine el audio
audio.addEventListener("ended",()=>{
    let rutaImagen,rutaAudio;
    if(posicion == arregloImagenes.length - 1){
        rutaImagen = arregloImagenes[0];
        rutaAudio = arregloDataUrl[0];
        posicion = 0;
    }
    else {
        rutaImagen = arregloImagenes[posicion + 1];
        rutaAudio = arregloDataUrl[posicion + 1];
        posicion++;
    }
    audio.pause();
            
    imagenReproduciendo.setAttribute("src",rutaImagen);
    audio.innerHTML = "<source src=" + rutaAudio + " type='audio/mp3'>";
    audio.load();
    audio.play();

    botonPlay.innerHTML = "<i class='fas fa-pause'></i>";
});



//Agregando eventos a los botones atras y adelante
cancionAnterior = document.getElementById("boton-izquierdo");
cancionSiguiente = document.getElementById("boton-derecho");


cancionAnterior.addEventListener("click",(e)=>{
    let rutaImagen,rutaAudio;
    if(posicion == 0){
        rutaImagen = arregloImagenes[arregloImagenes.length - 1];
        rutaAudio = arregloDataUrl[arregloDataUrl.length - 1];
        posicion = arregloImagenes.length - 1;
    }

    else{
        rutaImagen = arregloImagenes[posicion - 1];
        rutaAudio = arregloDataUrl[posicion - 1];
        posicion--;
    }
    audio.pause();
            
    imagenReproduciendo.setAttribute("src",rutaImagen);
    audio.innerHTML = "<source src=" + rutaAudio + " type='audio/mp3'>";
    audio.load();
    audio.play();

    botonPlay.innerHTML = "<i class='fas fa-pause'></i>";
});

cancionSiguiente.addEventListener("click",(e)=>{
    let rutaImagen,rutaAudio;
    if(posicion == arregloImagenes.length - 1){
        rutaImagen = arregloImagenes[0];
        rutaAudio = arregloDataUrl[0];
        posicion = 0;
    }

    else{
        rutaImagen = arregloImagenes[posicion + 1];
        rutaAudio = arregloDataUrl[posicion + 1];
        posicion++;
    }
    audio.pause();
            
    imagenReproduciendo.setAttribute("src",rutaImagen);
    audio.innerHTML = "<source src=" + rutaAudio + " type='audio/mp3'>";
    audio.load();
    audio.play();

    botonPlay.innerHTML = "<i class='fas fa-pause'></i>";
});


//Arreglo para las busquedas

