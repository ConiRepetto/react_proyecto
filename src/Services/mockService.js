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
                let itemsRequested = products.filter(
                    (item) => item.category === idCategory);
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
        }, 1000);
    });
}

//Buscador por input
export function findItem(findValue) {
    return new Promise((resolve, reject) => {
        let itemFind = products.find((item) => item.title.includes(findValue) );

        if (itemFind === undefined) reject("Producto no encontrado");

        setTimeout(() => {
            resolve(itemFind);
        }, 3000);
    });
}


export default getItems;


