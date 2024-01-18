const palabras = ["KINAL", "JAVA", "MONITOR", "TECLADO", "MOUSE", "JAVASCRIPT", "COMPUTADORA" ]; 
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
        
    }

    function seleccionarLetra() {

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
