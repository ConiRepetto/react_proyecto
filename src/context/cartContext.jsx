import { createContext, useState } from "react";

export const cartContext = createContext();//contexto donde se van a guardar los productos del carrito

//context provider
export function CartContextProvider(props) {

    const itemsInCart = 5;
    const [cart, setCart] = useState([])

    function addToCart(product, count){
        console.log(product, count)
    }

    const value={addToCart}

    return ( // retorna el Provider del context creado, llamado en APP
        <cartContext.Provider value ={value}>
            {props.children}
        </cartContext.Provider>
    )
}