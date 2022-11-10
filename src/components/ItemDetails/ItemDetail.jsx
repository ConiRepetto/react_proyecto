import React from "react";
import "../ItemList/Item"
import Button from "../Button/Button";
import ItemCount from "../Counter/Counter";
import { Link } from "react-router-dom";

function ItemDetail({product}) {
    return (
        <div className="cardContainterDetail">
            <div className="cardItem">
                <img src={product.thumbnail} alt="" className="imgItem" />
                <h3>{product.title}</h3>
                <p className="precio">${product.price}</p>
                <p>{product.description}</p>
                <ItemCount stock={8} valorInicial={5} /> {/*  No funciona el stock ni el valor inicial?? */}
                <div className="buttonContainer">
                    <Link to="/">
                        <Button text="Volver" color="#68a36d75" />
                    </Link>
                    <Button text="Agregar al Carrito" color="#98c15b" />
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;
