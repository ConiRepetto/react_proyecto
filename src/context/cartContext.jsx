import { createContext, useState } from "react";

export const cartContext = createContext();//contexto donde se van a guardar los productos del carrito

//context provider
export function CartContextProvider({ children }) {

    const [cart, setCart] = useState([]) //setCart creamos un nuevo carrito con los datos pasados

    function addToCart(product, count) { //findIndex: guarda en que posicion del array esta el id buscado. SIrve para que encontrando el index vayamos al producto y actualisemos el

        let itemAlreadyInCart = cart.findIndex(productInCart => productInCart.id === product.id)
        let newCart = [...cart]
        console.log("----->>>>", itemAlreadyInCart)
        console.log(newCart)

        if (itemAlreadyInCart !== -1) { //no entendi por que lo de -1
            newCart[itemAlreadyInCart].count += count
            setCart(newCart)
        }
        else {
            let newCart = [...cart]; //spread, agarra todo lo que hay en cart y lo meto en un nuevo array
            product.count = count; //agregar la key count al objeto product
            newCart.push(product)//agregamos todas las propiedades de product 
            setCart(newCart)
        }
    }

    function itemsInCart() { // LLAMO ESTA FUNCION DESDE CARTWIDGET >>>>> <span className='badge badge-warning' id='lblCartCount'> {miContext.itemsInCart()} </span>
        let total = 0;
        cart.forEach(itemInCart => total = itemInCart.count)
        return total
    }

    function clearCart() {

    }

    //usar filter,  filtrar todos los items del carrito  con id distinto al que se le pasa por prop, y eliminar cuando es el mismo id
    function removeItem(idEliminar) {
        let newCart = [...cart];
        let itemAEliminar = cart.findIndex(productEliminar => productEliminar.id === idEliminar)
        newCart.pop(itemAEliminar)
        setCart(newCart)
        alert(`Producto ${idEliminar} eliminado`)

        // let itemsRequested = cart.filter(
        //     (item) => item.id === idEliminar);   
        // alert(`Producto ${idEliminar} eliminado`)
    }

    //calcular costo total de la compra
    function priceInCart() {
        let totalAPagar = 0;
        cart.forEach(itemInCart => totalAPagar += itemInCart.price)
        return totalAPagar
    }



    return ( // retorna el Provider del context creado, llamado en APP
        <cartContext.Provider value={{ cart, addToCart, itemsInCart, clearCart, removeItem, priceInCart }}>
            {children}
        </cartContext.Provider>
    )
}