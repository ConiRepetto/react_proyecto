import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";


function CartWidget() {
  //const styleWidget = { width: '1.5em' };
  return (
    <div>
      <a href="/"><FontAwesomeIcon icon={faBagShopping} /></a>
      {/* <img src="/imgs/bag.png" alt="bag" style={styleWidget} /> */}
    </div>
  )
}

export default CartWidget

