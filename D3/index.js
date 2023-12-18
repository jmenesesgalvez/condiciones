//Elementos del DOM
function verificarPassword() {
    var valorSelect1 = document.getElementById('select1').value;
    var valorSelect2 = document.getElementById('select2').value;
    var valorSelect3 = document.getElementById('select3').value;
    
    //Variables
    var password = valorSelect1 + valorSelect2 + valorSelect3;
    
    var resultadoElement = document.querySelector('#resultado');

    // Funciones
    if (password === '911') {
      resultadoElement.textContent = 'LA PASSWORD 1 ESTA CORRECTA';
    } else if (password === '714') {
      resultadoElement.textContent = 'LA PASSWORD 2 ESTA CORRECTA';
    } else {
      resultadoElement.textContent = 'INGRESASTE LA PASSWORD INCORRECTA';
    }
  }
  // Eventos