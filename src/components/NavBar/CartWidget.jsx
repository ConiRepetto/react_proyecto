import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";


function CartWidget() {
  //const styleWidget = { width: '1.5em' };
  return (
    <div>
      <a href="/"><FontAwesomeIcon icon={faBagShopping} /></a>
      <span className='badge badge-warning' id='lblCartCount'> 1 </span>
    </div>
  )
}

export default CartWidget

