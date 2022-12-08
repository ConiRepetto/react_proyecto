import React from 'react'
import { createOrder} from '../../Services/firestore'
import {useParams} from 'react-router-dom'


function ThankYou() {
    const idOrder = useParams().idOrder
    return (
        <div>
            Gracias por tu compra, tu Num. de orden es: <strong>{idOrder}</strong> !
        </div>
    )
}

export default ThankYou