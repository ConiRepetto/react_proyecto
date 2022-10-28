import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import "./counter.css"


function ItemCount(props) {
    let [count, setCount] = React.useState(1)

    function handleResta() {
        if (count > 1) setCount(count - 1)
    }

    function handleSuma() {
        if (count < props.stock)
        setCount(count + 1)
    }
    return (
        <div>
            <FontAwesomeIcon icon={faMinus} onClick={handleResta} className="counterIcon" />
            <span>{count}</span>
            <FontAwesomeIcon icon={faPlus} onClick={handleSuma} className="counterIcon" />
        </div>
    )
}

export default ItemCount