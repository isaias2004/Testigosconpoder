// script.js

function calcularResultado(){

  let total = 0;

  for(let i = 1; i <= 8; i++){

    let respuesta = document.querySelector(`input[name="p${i}"]:checked`);

    if(!respuesta){
      alert("Respondé todas las preguntas.");
      return;
    }

    total += parseInt(respuesta.value);
  }

  let resultado = document.getElementById("resultado");

  // MOSTRAR POPUP
  resultado.classList.add("mostrar");

  if(total < 80){

    resultado.innerHTML = `
      <div class="resultado-card">

        <h2>PUNTAJE: ${total}%</h2>

        <p>
          AUN PODÉS CAPACITARTE EN EVANGELISMO
          Y GANAR MUCHAS ALMAS PARA CRISTO.
        </p>

        <p>
          ESTOS TEMAS Y MUCHOS MÁS LOS APRENDERÁS
          EN LAS DISTINTAS CARRERAS DE EMUBA.
        </p>

        <button onclick="cerrarResultado()">
          CERRAR
        </button>

      </div>
    `;

  } else if (total >= 50 && total < 80){

    resultado.innerHTML = `
      <div class="resultado-card amarillo">

        <h2>PUNTAJE: ${total}%</h2>

        <p>
          ¡FELICITACIONES!
        </p>

        <p>
          AHORA TE TOCA SEGUIR CRECIENDO Y DESCUBRIR
          CÓMO Y DÓNDE DIOS QUIERE USARTE CON PODER.
        </p>

        <p>
          TE ESPERAMOS EN LAS DISTINTAS
          CARRERAS DE EMUBA.
        </p>

        <button onclick="cerrarResultado()">
          CERRAR
        </button>

      </div>
    `;
  } else {

    resultado.innerHTML = `
      <div class="resultado-card verde">

        <h2>PUNTAJE: ${total}%</h2>

        <p>
          ¡FELICITACIONES!
        </p>

        <p>
          HAS DEMOSTRADO UN GRAN COMPROMISO CON TU FE.
        </p>

        <p>
          TE ESPERAMOS EN LAS DISTINTAS
          CARRERAS DE EMUBA.
        </p>

        <button onclick="cerrarResultado()">
          CERRAR
        </button>

      </div>
    `;
  }
}

function cerrarResultado(){

  document.getElementById("resultado")
  .classList.remove("mostrar");
}