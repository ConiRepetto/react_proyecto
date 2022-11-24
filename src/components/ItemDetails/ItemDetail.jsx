import React, {useContext} from 'react' //hook
import { cartContext } from "../../context/cartContext"//importar el contexto que quiero usar
import "./itemDetail.css"
import ItemCount from "../Counter/Counter";
//import { Link } from "react-router-dom";

function ItemDetail({ product }) {

    const {addToCart} = useContext(cartContext)

    function onAddToCart(count) {
        alert(`Agregaste ${count} productos a tu carrito`);
        addToCart(product,count)
        /* setState(count) */
    }

    return (
        <div className="cardContainterDetail">
            <div className="cardItem">
                <img src={product.thumbnail} alt="" className="imgItem" />
                <h3>{product.title}</h3>
                <p className="precio">${product.price}</p>
                <p>{product.description}</p>
                <ItemCount
                    onAddToCart={onAddToCart}
                    stock={product.stock}
                    valorInicial={5} /> {/*  No funciona  el valor inicial?? */}
            </div>
        </div>
    );
}

export default ItemDetail;
