import React from "react";
import Button from "../components/Button";

function Item(props) {
    return (
        <div>
            <img src="{props.imgUrl}" alt="" />
            <h3>{props.text}</h3>
            <p>${props.price}</p>
            <Button text="ver mas" />
            <Button text="Agregar al Carrito" />
        </div>
    );
}

export default Item;
