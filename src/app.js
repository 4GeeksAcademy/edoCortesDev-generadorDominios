import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

var pronoun = ["the", "our"];
var adj = ["great", "big"];
var noun = ["jogger", "racoon"];

function generateDomains() {
  var domainList = document.getElementById("domain-list");

  for (var i = 0; i < pronoun.length; i++) {
    for (var j = 0; j < adj.length; j++) {
      for (var k = 0; k < noun.length; k++) {
        var listItem = document.createElement("li");
        listItem.textContent = pronoun[i] + adj[j] + noun[k] + ".com";

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
