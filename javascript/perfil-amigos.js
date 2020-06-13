const grid = new Muuri(".grid", {
	layout: {
		rounding: false
	}
});

window.addEventListener("load",()=>{
    grid.refreshItems().layout();
    document.getElementById("input-busqueda").value = "";
});

var items = document.querySelectorAll(".grid .item");
var contador;
var noEncontrado = document.getElementById("no-encontrado");

document.getElementById("input-busqueda").addEventListener("input",(e)=>{
    const nombre = e.target.value.toLowerCase();
    //Realizamos el filtrado

    grid.filter((item) => item.getElement().dataset.nombre.includes(nombre));  
    
    contador = 0;

    items.forEach((i)=>{
        if(i.classList.contains("muuri-item-hidden")){
            contador++;
        }

        if(contador == items.length){
            //No se encontraron resultados
            noEncontrado.classList.add("activo");
        }
        else{
            noEncontrado.classList.remove("activo");
        }
    });
    

});

document.getElementById("input-pais").addEventListener("input",(e)=>{
    const pais  = e.target.value.toLowerCase();
    grid.filter((item)=> item.getElement().dataset.pais.includes(pais));

    contador = 0;

    items.forEach((i)=>{
        if(i.classList.contains("muuri-item-hidden")){
            contador++;
        }

        if(contador == items.length){
            //No se encontraron resultados
            noEncontrado.classList.add("activo");
        }
        else{
            noEncontrado.classList.remove("activo");
        }
    });
});