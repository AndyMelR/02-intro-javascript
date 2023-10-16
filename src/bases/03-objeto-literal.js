const persona = {
  nombre: "Tony",
  apellido: "Stark",
  edad: 45,
  direccion: {
    ciudad: "New York",
    zip: 567682539,
    lat: 14.6789,
    lng: 34.983649,
  },
};

console.log({ persona: persona }); // si son iguales no hace falta ponerlo asi, obviamos los :

//console.table(persona);

console.log(persona);

// como clono el objeto
//opcion 1: lo que estamos haciendo es copiar la referencia al espacio memoria de esa variable persona

//const persona2 = persona; //esta asignacion de referencia no copia los valores
//persona2.nombre = " Peter"; // esto nos dari aun falso positivo ya que tambien habra modificado persona.nombre ademas de persona2.nombre

//Para clonar es mejor hacer un nuevo objeto,que apunta a un espacio memoria nuevo para eso utilizamo el spread operator

const persona2 = { ...persona };

persona2.nombre = "Andrea";

console.log(persona2);
console.log(persona);
