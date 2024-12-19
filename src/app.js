import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// Variables globales
var pronoun = ["the", "our"]; // Lista de pronombres
var adj = ["great", "big"]; // Lista de adjetivos
var noun = ["jogger", "racoon"]; // Lista de sustantivos

// Función para generar nombres de dominio
function generateDomains() {
  var domainList = document.getElementById("domain-list"); // Referencia al elemento UL en HTML

  for (var i = 0; i < pronoun.length; i++) {
    for (var j = 0; j < adj.length; j++) {
      for (var k = 0; k < noun.length; k++) {
        // Crear un elemento de lista para cada dominio
        var listItem = document.createElement("li");
        listItem.textContent = pronoun[i] + adj[j] + noun[k] + ".com";

        // Agregar el elemento de lista al UL
        domainList.appendChild(listItem);
      }
    }
  }
}

// Llamada a la función cuando la página se carga
window.onload = function() {
  console.log("Hello Rigo from the console!");
  generateDomains(); // Genera y muestra los dominios
};
