//Elementos del DOM

//Variables 

// Funciones 
function calcularSuma() {
  // Obtén las cantidades de los input
  var cantidad1 = parseFloat(document.getElementById('cantidad1').value) || 0;
  var cantidad2 = parseFloat(document.getElementById('cantidad2').value) || 0;
  var cantidad3 = parseFloat(document.getElementById('cantidad3').value) || 0;

  var suma = cantidad1 + cantidad2 + cantidad3;

  var resultadoElement = document.querySelector('#resultado');

  resultadoElement.textContent = suma;

  if (suma < 10) {
    resultadoElement.textContent = 'Llevas ' + suma + ' stickers';
  } else {
    resultadoElement.textContent = 'Llevas demasiados stickers';
  }
}
// Eventos 

