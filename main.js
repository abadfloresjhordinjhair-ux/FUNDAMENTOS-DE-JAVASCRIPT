

let edad = 20;
let esEstudiante = true;

const PI = 3.14;
const UNIVERSIDAD = "UCV";

console.log(typeof edad);
console.log(typeof esEstudiante);
console.log(typeof PI);
console.log(typeof UNIVERSIDAD);

document.getElementById("tipo").innerHTML =
`Edad: ${typeof edad} | Estudiante: ${typeof esEstudiante}`;



let nombre = prompt("¿Cómo te llamas?");

let saludo = `Hola ${nombre}, tienes ${edad} años`;

document.getElementById("saludo").innerHTML = saludo;



let gusto = prompt("¿Te gusta el chocolate? (si/no)");

if (gusto === "si") {
    document.getElementById("decision").innerHTML = "Te gusta el chocolate 🍫";
} else {
    document.getElementById("decision").innerHTML = "No te gusta el chocolate ❌";
}




let opcion = prompt("Elige una opción (1,2,3)");

switch (opcion) {
    case "1":
        document.getElementById("switchResult").innerHTML = "Elegiste opción 1";
        break;

    case "2":
        document.getElementById("switchResult").innerHTML = "Elegiste opción 2";
        break;

    case "3":
        document.getElementById("switchResult").innerHTML = "Elegiste opción 3";
        break;

    default:
        document.getElementById("switchResult").innerHTML = "Opción no válida";
}



let texto = "";

for (let i = 0; i < 10; i++) {
    texto += `Iteración número: ${i} <br>`;
}

document.getElementById("bucle").innerHTML = texto;


document.getElementById("resultadoConst").innerHTML =
`PI: ${PI} <br> Universidad: ${UNIVERSIDAD}`;