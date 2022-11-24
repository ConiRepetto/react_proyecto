import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import "./counter.css"
import Button from "../Button/Button";
//import { Link } from "react-router-dom";

function ItemCount({ stock, onAddToCart }) {
    let [count, setCount] = React.useState(1)

    function handleResta() {
        if (count > 1) setCount(count - 1)
    }

    function handleSuma() {
        if (count < stock) //el valor de stock entra desde ItemListContainer (que es el que lee DATA), de ahi pasa a Item y de Item llega al Counter.
            setCount(count + 1)
    }

    return (
        <div>
            <div className='counterContainer'>
                <FontAwesomeIcon icon={faMinus} onClick={handleResta} className="counterIcon" />
                <span>{count}</span>
                <FontAwesomeIcon icon={faPlus} onClick={handleSuma} className="counterIcon" />
            </div>
            <div className="buttonContainer">
                {/* <Link to="/">
                    <Button color="#68a36d75">Volver</Button>
                </Link> */}
                <Button onClick= {()=> onAddToCart(count)} color="#98c15b" >Agregar al Carrito</Button>
            </div>
        </div>
    )
}

export default ItemCount