//Elementos del DOM
const img = document.getElementById("img");

//Variables
var bordeRojoActivo = false;

// Funciones
function toggleBordeRojo(img) {
  if (bordeRojoActivo) {
    img.classList.remove("selected");
  } else {
    img.classList.add("selected");
  }
  
  bordeRojoActivo = !bordeRojoActivo;
}
// Eventos
