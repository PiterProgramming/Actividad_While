// Ejercicio 1

let numero_ = prompt("Introduce un número:");
numero_ = parseInt(numero_);

for (let i = 1; i <= numero_; i++) {
  if (i % 5 === 0) {
    console.log(i);
  }
}

// Ejercicio 2

let num1 = prompt("Introduce el primer número entre 1 y 50:");
let num2 = prompt("Introduce el segundo número entre 1 y 50:");

num1 = parseInt(num1);
num2 = parseInt(num2);

for (let i = 1; i <= 50; i++) {
  if (i === num1 || i === num2) {
    console.log(i + " ¡Lotería!");
  } else {
    console.log(i);
  }
}

// Ejercicio 3

let numeros = [];
let numero;

do {
  numero = prompt("Introduce un número (0 para terminar):");
  numero = parseInt(numero);
  if (numero !== 0) {
    numeros.push(numero);
  }
} while (numero !== 0);

console.log("Números capturados:", numeros);

// Ejercicio 4

let palabras = [];
let palabra;

do {
  palabra = prompt("Introduce una palabra (deja vacío para terminar):");
  if (palabra) {
    palabras.push(palabra);
  }
} while (palabra);

console.log("Concatenación de palabras:", palabras.join(" "));

// Ejercicio 5

let dia;
do {
  dia = prompt("Introduce un día de la semana:");
  switch (dia.toLowerCase()) {
    case "lunes":
      alert("Inicio de semana, a trabajar.");
      break;
    case "martes":
    case "miércoles":
    case "jueves":
      alert("Mitad de semana, sigue así.");
      break;
    case "viernes":
      alert("Casi fin de semana, ánimo.");
      break;
    case "sábado":
      alert("Disfruta tu fin de semana.");
      break;
    case "domingo":
      alert("Ve a descansar.");
      break;
    default:
      alert("Por favor, introduce un día válido.");
  }
} while (dia.toLowerCase() !== "domingo");

