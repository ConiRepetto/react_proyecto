import React, { useContext, useState } from 'react' //hook
import { cartContext } from "../../context/cartContext"//importar el contexto que quiero usar
import "./itemDetail.css"
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

    return (
        <div className="cardContainterDetail">
            <div className="cardItem">
                <img src={product.thumbnail} alt="" className="imgItem" />
                <h3>{product.title}</h3>
                <h4 style={{ color: product.discount && "#3d6641" }} className="precio">${product.price}</h4>
                <p style={{ color: "#3d6641" }}>{product.discount && <small>Descuento: {product.discount}% off </small>}</p>
                <p>{product.description}</p>
                
                {
                    isInCart ?
                        <div className='buttonIrCarrito'>
                            <Link to="/cart">
                                <Button color="#e288b">Ir a mi Carrito</Button>
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
