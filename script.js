const palabras = ["KINAL", "JAVA", "MONITOR", "TECLADO", "MOUSE", "JAVASCRIPT", "COMPUTADORA", "PROCESADOR", "PROFESOR", "SEXTO" ]; 
let palabraSeleccionada = palabras[Math.floor(Math.random() * palabras.length)]; 
let letrasAdivinadas = [];
let oportunidades = 7;
let errores = 0;


function dibujar() {
    const canvas = document.getElementById("muñeco");

  }

    function iniciar() {
      let displayPalabra = "";
      for (let i = 0; i < palabraSeleccionada.length; i++) {
        displayPalabra += "_ ";
      }
      document.getElementById("displayPalabra").textContent = displayPalabra;
    }

    function actualizarDisplayPalabra() {
        let displayPalabra = "";
        for (let letra of palabraSeleccionada) {
          if (letrasAdivinadas.includes(letra)) {
            displayPalabra += letra + " ";
          } else {
            displayPalabra += "_ ";
          }
        }
        document.getElementById("displayPalabra").textContent = displayPalabra;
    }

    function seleccionarLetra(letra) {
        if (!letrasAdivinadas.includes(letra)) {
            letrasAdivinadas.push(letra);
            if (!palabraSeleccionada.includes(letra)) {
              errores++;
              drawHangman();
            }
            actualizarDisplayPalabra();
            document.getElementById("letrasUsadas").textContent = letrasAdivinadas.join(", ");
            document.getElementById("oportunidadesRestantes").textContent = 7 - errores;
        
            if (errores === 7) {
              alert("Perdiste :( , La palabra era: " + palabraSeleccionada);
              location.reload();
            } else if (!document.getElementById("displayPalabra").textContent.includes("_")) {
              alert("Ganaste :D");
              location.reload();
            }
          }
    }
      
    for (let i = 65; i <= 90; i++) {
      let letra = String.fromCharCode(i);
      let boton = document.createElement("button");
      boton.textContent = letra;
      boton.id = `letra-boton-${letra}`;
      boton.addEventListener("click", function() {
        seleccionarLetra(letra);
        boton.disabled = true;
      });
      document.body.appendChild(boton);
    }

    iniciar();
