//para conectarse al contexto useContext
import React, { useContext } from 'react' //hook
import { cartContext } from '../../context/cartContext';//importar el contexto que quiero usar
import "./NavBar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";



function CartWidget() {
  //const styleWidget = { width: '1.5em' };
  const miContext = useContext(cartContext)//useContext se contecta con el contexto que le digo, y pasa el valor dentro de ese context
  const numSpan = Number(miContext.itemsInCart())

  return (
    <div>
      <FontAwesomeIcon icon={faBagShopping} />
      {
        numSpan >= 1 ?
        <span className='badge badge-warning' id='lblCartCount'> {miContext.itemsInCart()} </span> : <span></span>
      }
    </div>
  )
}

export default CartWidget

