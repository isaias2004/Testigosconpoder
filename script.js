// script.js

function abrirPantalla(id){

  let pantallas = document.querySelectorAll(".pantalla");

  pantallas.forEach(p => {
    p.classList.remove("activa");
  });

  document.getElementById(id).classList.add("activa");
}

function volverInicio(){

  let pantallas = document.querySelectorAll(".pantalla");

  pantallas.forEach(p => {
    p.classList.remove("activa");
  });

  document.getElementById("inicio").classList.add("activa");
}

function mostrarMensaje(texto){

  let popup = document.getElementById("popup");
  let mensaje = document.getElementById("mensajePopup");

  mensaje.innerText = texto;

  popup.style.display = "block";

  setTimeout(() => {
    popup.style.display = "none";
  }, 2500);
}

// AGREGAR A script.js

function calcularResultado(){

  let total = 0;

  for(let i = 1; i <= 10; i++){

    let respuesta = document.querySelector(`input[name="p${i}"]:checked`);

    if(!respuesta){
      alert("Respondé todas las preguntas.");
      return;
    }

    total += parseInt(respuesta.value);
  }

  let resultado = document.getElementById("resultado");

  if(total < 50){

    resultado.innerHTML = `
      PUNTAJE: ${total}<br>
      DESAPROBADO
    `;

  }else if(total >= 50 && total <= 70){

    resultado.innerHTML = `
      PUNTAJE: ${total}<br>
      REGULAR
    `;

  }else{

    resultado.innerHTML = `
      PUNTAJE: ${total}<br>
      APROBADO
    `;
  }
}