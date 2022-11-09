// BACK END
import products from "../data/data";

function getItems() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 1000); //milisegundos de espera
    });
} 


export function getSingleItem() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products[6]);
        }, 2000); //milisegundos de espera
    });
} 


export default getItems;

/*FRONT END
console.log("App inicada");

let promiseAPI = APICall();

promiseAPI.then((respuesta) => {
        console.log('llegamos', respuesta); //se llama cuando la tarea se resuelve
    })
    .catch((respuestaError) => { 
        console.log('Error:', respuestaError)

    });


console.log(promiseAPI);
console.log("Seguimos trabajando...")
*/

//Para que queremos las promesas?? > vamos a hacer que esta api artificial nos devuelva la lista de productos completa (la que usamos en item)