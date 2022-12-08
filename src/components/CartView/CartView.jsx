import React, { useContext } from 'react'
import "./cartView.css"
import { cartContext } from "../../context/cartContext"
import FormInput from '../FormInput/FormInput'
import Button from '../Button/Button'
import { createOrder} from '../../Services/firestore'
import { useNavigate } from "react-router-dom";


function CartView() {
    const { cart, removeItem, clearCart, priceInCart } = useContext(cartContext)
    const navigate = useNavigate()

    if (cart.length === 0) return (<h1>Carrito Vacio</h1>)

    async function handleCheckout(evt, data) {
        const order = {
            buyer: data,
            items: cart,
            total: priceInCart(),
            date: new Date() //objeto de tipo fecha que en firebase se traduce a timestamp
        };
        const orderId = await createOrder(order);
        console.log(order)
        navigate(`/thankyou/${orderId}`)

    }

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
                <Button onClick={() => clearCart()} className='button2' colorBtn="#e288b">Vaciar Carrito</Button>
            </div>

            <div className='precioTotal'>
                <p>Total a pagar: </p>
                <h3>${priceInCart()}</h3>

                <FormInput onSubmit={handleCheckout}/>

            </div>

        </div>
    )
}

export default CartView