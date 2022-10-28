import React from "react";
import "./Item.css"
import Button from "../Button/Button";
import ItemCount from "../Counter/Counter";

function Item(props) {
    return (
        <div className="cardItem">
            <img src={props.imgUrl} alt="" className="imgItem"/>
            <h3>{props.title}</h3>
            <p>${props.price}</p>
            <ItemCount stock={8} valorInicial={5}/>
            <div className="buttonContainer">
            <Button text="Ver Mas" color= "#68a36d75" />
            <Button text="Agregar al Carrito" color= "#98c15b"/>
            </div>
        </div>
    );
}

export default Item;
