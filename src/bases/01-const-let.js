//Variables y constantes

const nombre = "Fernando";
const apellido = "Melero";

let valorDado = 5;
valorDado = 4;

console.log(nombre, apellido, valorDado);
// var no se debe usar
if (true) {
  // scope diferentes
  let valorDado = 6;

  console.log(valorDado);
}

console.log(valorDado);
