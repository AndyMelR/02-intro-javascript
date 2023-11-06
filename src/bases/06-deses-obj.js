const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

//const { nombre, edad, clave } = persona;

const useContext = ({nombre, edad, clave, rango ='Capitán'}) => {
    //console.log(nombre, edad, clave, rango);
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            latitude : 14.6789,
            lng: -123456
        }
    }

}

const {nombreClave, anios, latlng:{latitude, lng}} = useContext(persona);
console.log(nombreClave, anios); 
console.log ( latitude, lng);

//console.log(nombre)
//console.log(edad)
//console.log(clave)