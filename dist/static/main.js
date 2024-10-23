const frases = [
    "Madera recuperada, la mejor opción para muebles únicos",
    "Diseñamos y fabricamos muebles de estilo industrial, combinando hierro y madera para crear piezas con personalidad",
    "Tus proyectos en las mejores manos",
];

const fraseCont = document.querySelector("#frase p");
const idx = Math.floor(Math.random() * frases.length);
fraseCont.innerText = frases[idx];