const nombre = "Andrea";
const apellido = "Melero";
const nombreCompleto = nombre + " " + apellido;
console.log(nombreCompleto);

const nombreCompleto2 = `${nombre} ${apellido}`;

console.log(nombreCompleto2);

// de la siguiete manera saldran en columna
const nombreCompleto3 = `
${nombre}
${apellido}
${11 + 12}`;

console.log(nombreCompleto3);

function getSaludo(name) {
  return "Hola " + name;
}

console.log(`Este es un texto: ${getSaludo(nombreCompleto)} `);
