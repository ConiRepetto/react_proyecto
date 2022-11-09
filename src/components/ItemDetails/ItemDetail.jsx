import React from "react";
import "./itemDetail.css"
import Button from "../Button/Button";
import ItemCount from "../Counter/Counter";

function ItemDetail(props) {
    return (
        <div className="cardContainter">
        <div className="cardItem">
            <img src={props.imgUrl} alt="" className="imgItem"/>
            <h3>{props.title}</h3>
            <p className="precio">${props.price}</p>
            <p>{props.description}</p>
            <ItemCount stock={8} valorInicial={5}/> {/*  No funciona el stock ni el valor inicial?? */}
            <div className="buttonContainer">
            <Button text="Volver" color= "#68a36d75" />
            <Button text="Agregar al Carrito" color= "#98c15b"/>
            </div>
        </div>
        </div>
    );
}

export default ItemDetail;