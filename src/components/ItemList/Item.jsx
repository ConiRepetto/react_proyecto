import React from "react";
import "./Item.css"
import Button from "../Button/Button";

function Item(props) {
    return (
        <div className="cardItem">
            <img src={props.imgUrl} alt="" className="imgItem"/>
            <h3>{props.title}</h3>
            <p>${props.price}</p>
            <div className="buttonContainer">
            <Button text="Ver Mas" color= {props.color} />
            <Button text="Agregar al Carrito" />
            </div>
        </div>
    );
}

export default Item;
