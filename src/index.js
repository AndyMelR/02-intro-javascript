// las promeas por naturaleza son asíncronas
// se crean con unargumento que es un callback que recibe 2 arguentos: resolve y reject
import {getHeroById, getHeroByOwner} from './bases/08-import-export'
const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve()
    }, 2000);
});// por naturaleza son asíncronas

promesa.then( () => {
    console.log('Then de la promesa')
})
.catch( err => console.warn( err ));

