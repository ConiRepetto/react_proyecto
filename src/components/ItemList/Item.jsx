import React from "react";
import "./Item.css"
import Button from "../Button/Button";
//import ItemCount from "../Counter/Counter";
import { Link } from "react-router-dom";

function Item(props) {
    const urlDetail = `/detail/${props.id}`

    return (
        <div className="cardContainter">
            <div className="cardItem">
                <img src={props.imgUrl} alt="" className="imgItem" />
                <h3>{props.title}</h3>
                <h4 style={{ color: props.discount && "#3d6641" }} className="precio">${props.price}</h4>
                <p style={{ color: "#3d6641" }}>{props.discount && <small>Descuento: {props.discount}% off </small>}</p>
                {props.stock <=0 && <span>Sin Stock</span>}
                <div className="buttonContainer">
                    <Link to={urlDetail}>
                        <Button color={props.stock <=0 ? "red" : "#68a36d"}>Ver Detalles</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Item;
