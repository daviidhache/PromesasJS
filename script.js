window.onload=inicio;
var enlacesMenu = document.querySelectorAll('.navbar-nav a');
var cajonPadre = document.getElementById("cajonPadre");
cajonPadre.className = "contenedor";
var combo = document.getElementById("genero");
combo.addEventListener("change",accion);
const arrayGeneros = [];
 // const URLGAMES = "https://www.freetogame.com/api/games";


  
  function inicio(){

   mostrarTodosJuegos();
    accion();


}


async function mostrarTodosJuegos(){
        const response = await  fetch("juegos.json");
        const data = await response.json();
        for(let i = 0; i < data.length;i++){  
            let cuadro = document.createElement("div");
            let img = document.createElement("img");
            img.setAttribute("src",data[i].thumbnail);
            img.className = "imagen";
            let titulo = document.createElement("h3");
            titulo.textContent = data[i].title;
            let plataforma = document.createElement("p");
            plataforma.textContent = data[i].platform;
            cuadro.appendChild(titulo);
            cuadro.appendChild(img);
            cuadro.appendChild(plataforma);
            cajonPadre.appendChild(cuadro);
          
            if(!arrayGeneros.includes(data[i].genre)){
                    arrayGeneros.push(data[i].genre);
                   
                    cargarCombo(data[i].genre);
            }
        }
}


function cargarCombo(dato){
       
        combo.innerHTML+=`<option value=${dato}>${dato}</option>`;
        

}

 async function buscarPorGenero(){
    cajonPadre.innerHTML = "";
    const response = await  fetch("juegos.json");
        const data = await response.json();
        for(let i = 0; i < data.length;i++){  
            if(data[i].genre == combo.value){
                let cuadro = document.createElement("div");
            let img = document.createElement("img");
            img.setAttribute("src",data[i].thumbnail);
            img.className = "imagen";
            let titulo = document.createElement("h3");
            titulo.textContent = data[i].title;
            let plataforma = document.createElement("p");
            plataforma.textContent = data[i].platform;
            cuadro.appendChild(titulo);
            cuadro.appendChild(img);
            cuadro.appendChild(plataforma);
            cajonPadre.appendChild(cuadro);
            }
        }
}

function accion(){
    buscarPorGenero();
}


