import React, { useContext } from 'react'
import "./cartView.css"
import { cartContext } from "../../context/cartContext"
import Button from '../Button/Button'



function CartView() {
    const { cart, removeItem, clearCart, priceInCart } = useContext(cartContext)

    if(cart.length === 0) return (<h1>Carrito Vacio</h1>)

    return (

        <div className='cartContainer'>
            <div className='cartItemsCont'>
                {
                    cart.map(item =>

                        <div key={item.id} className='cartViewContainer'>
                            <div className='imgCartCont'><img className='imgCart' src={item.thumbnail} alt="" /></div>
                            <h2>{item.title}</h2>
                            <h4>${item.price}</h4>
                            <h3>{item.count} unidedes</h3>
                            <Button onClick={() => removeItem(item.id)} className='button1' > <img className='imgTrash' src="/imgs/trash-can.png" alt="" /></Button>
                        </div>
                    )
                }
                <Button onClick={() => clearCart()} className='button2'>Vaciar Carrito</Button>
            </div>

            <div className='precioTotal'>
                <p>$Costo total</p>
                <p>Descuento: %</p>
                <p>Total a pagar: $</p>
                <h1>{priceInCart()}</h1>
            </div>

        </div>
    )
}

export default CartView