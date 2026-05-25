// script.js

function calcularResultado(){

  let total = 0;

  // RECORRE LAS 8 PREGUNTAS
  for(let i = 1; i <= 8; i++){

    let respuesta = document.querySelector(`input[name="p${i}"]:checked`);

    // VALIDAR QUE TODAS ESTÉN RESPONDIDAS
    if(!respuesta){

      alert("Respondé todas las preguntas.");

      return;
    }

    total += parseInt(respuesta.value);
  }

  // CALCULAR PORCENTAJE
let porcentaje = Math.round((total / 8) * 100);

  let resultado = document.getElementById("resultado");

  // MOSTRAR MODAL
  resultado.classList.add("mostrar");

  // =========================
  // DESAPROBADO
  // =========================

  if(porcentaje < 50){

    resultado.innerHTML = `

      <div class="resultado-card rojo">

        <h2>PUNTAJE: ${porcentaje}%</h2>

        <p>
          AUN PODES CAPACITARTE EN EVANGELISMO Y GANAR MUCHAS ALMAS PARA CRISTO !!
          ESTOS TEMAS Y MUCHOS MAS LOS APRENDERAS EN LAS DISTINTAS CARRERAS DE EMUBA
        </p>

        <button onclick="cerrarResultado()">
          CERRAR
        </button>

      </div>
    `;

  }

  // =========================
  // REGULAR
  // =========================

  else if(porcentaje >= 50 && porcentaje < 80){

    resultado.innerHTML = `

      <div class="resultado-card amarillo">

        <h2>PUNTAJE: ${porcentaje}%</h2>

        <p>
          ¡VAS MUY BIEN!
        </p>

        <p>
          AUN PODES CAPACITARTE EN EVANGELISMO Y GANAR MUCHAS ALMAS PARA CRISTO !!
          ESTOS TEMAS Y MUCHOS MAS LOS APRENDERAS EN LAS DISTINTAS CARRERAS DE EMUBA
        </p>

        <button onclick="cerrarResultado()">
          CERRAR
        </button>

      </div>
    `;
  }

  // =========================
  // APROBADO
  // =========================

  else{

    resultado.innerHTML = `

      <div class="resultado-card verde">

        <h2>PUNTAJE: ${porcentaje}%</h2>

        <p>
          ¡FELICITACIONES!
        </p>

        <p>
          ¡FELICITACIONES! AHORA TE TOCA SEGUIR CRECIENDO
          Y DESCUBRIR COMO Y DONDE DIOS QUIERE USARTE CON
          PODER A TRAVES DE LAS DISTINTAS CARRERAS DE EMUBA. TE ESPERAMOS
        </p>

        <button onclick="cerrarResultado()">
          CERRAR
        </button>

      </div>
    `;
  }
}

// CERRAR MODAL

function cerrarResultado(){

  document
    .getElementById("resultado")
    .classList.remove("mostrar");
}