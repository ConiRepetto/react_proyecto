import React, { useContext, useState } from 'react' //hook
import { cartContext } from "../../context/cartContext"//importar el contexto que quiero usar
//import "./itemDetail.css"
import ItemCount from "../Counter/Counter";
import Button from '../Button/Button';
//import { faSleigh } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

function ItemDetail({ product }) {
    const [isInCart, setIsInCart] = useState(false)
    const { addToCart } = useContext(cartContext)

    function onAddToCart(count) {
        //alert(`Agregaste ${count} productos a tu carrito`);
        addToCart(product, count)
        setIsInCart(count)
    }

    //let itemInContext = cart.find(itemInCart => itemInCart.id === product.id)
    //let stockUpdate = itemInContext !== undefined ? product.stock - itemInContext.count : product.stock

    return (

        <div className="cardItem">
            <div>
                <img src={product.thumbnail} alt="" className="imgItem" />
            </div>
            <div className='cardSide'>
                <div className='cardDescription'>
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                </div>
                <div>
                    <h4 style={{ color: product.discount && "#3d6641" }} className="precio">${product.price}</h4>
                    <p style={{ color: "#3d6641" }}>{product.discount && <small>Descuento: {product.discount}% off </small>}</p>
                </div>
                {isInCart ?
                    <div className='buttonIrCarrito'>
                        <Link to="/cart">
                            <Button colorBtn="#e288b">Ir a mi Carrito</Button>
                        </Link>
                    </div>
                    :
                    <ItemCount
                        onAddToCart={onAddToCart}
                        stock={product.stock} />
                }
            </div>
        </div>

    );
}

export default ItemDetail;
