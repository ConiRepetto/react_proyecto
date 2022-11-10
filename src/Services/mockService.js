// BACK END
import products from "../data/data";


//Filtrar por Categoria
function getItems(idCategory) {
    return new Promise((resolve, reject) => {
        if (idCategory === undefined) {
            setTimeout(() => {
                resolve(products);
            }, 1000); //milisegundos de espera
        } else {
            setTimeout(() => {
                let itemsRequested = products.filter((item) => item.category === idCategory);
                resolve(itemsRequested);
            }, 1000);
        }
    });
}

//Muestra detalle d 1 solo producto con Boton Ver Mas
export function getSingleItem(idParam) {
    return new Promise((resolve, reject) => {
        let itemRequested = products.find((item) => item.id === Number(idParam));

        if (itemRequested === undefined) reject("Producto no encontrado");

        setTimeout(() => {
            resolve(itemRequested);
        }, 2000);
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