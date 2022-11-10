import React from "react";
import "./Item.css"
import Button from "../Button/Button";
import ItemCount from "../Counter/Counter";
import {Link} from "react-router-dom";

function Item(props) {
    const urlDetail = `/detail/${props.id}`

    return (
        <div className="cardContainter">
        <div className="cardItem">
            <img src={props.imgUrl} alt="" className="imgItem"/>
            <h3>{props.title}</h3>
            <p className="precio">${props.price}</p>
            <ItemCount stock={8} valorInicial={5}/>
            <div className="buttonContainer">
            <Link to={urlDetail}>
            <Button text="Ver +" color= "#68a36d75" />
            </Link>
            <Button text="Agregar al Carrito" color= "#98c15b"/>
            </div>
        </div>
        </div>
    );
}

export default Item;
