//function saludar(nombre) {
// return `Hola, ${nombre}`;
//}

//console.log(saludar("Goku"));

const saludar = function saludar(nombre) {
  return `Hola, ${nombre}`;
};

console.log(saludar);

//funciones de flecha
const saludar2 = (nombre) => {
  return `Hola, ${nombre}`;
};
console.log(saludar2(" Wulma"));

const saludar3 = (nombre) => `Hola, ${nombre}`;
console.log(saludar3("vegeta"));

const getUser = () => ({
  uid: "ABCDE",
  username: "El_Papi1502",
});
console.log(getUser());

const getUsuarioActivo = (nombre) => ({
  uid: "ABCDE",
  username: nombre,
});

const usuarioActivo = getUsuarioActivo("Fernando");
console.log(usuarioActivo);
