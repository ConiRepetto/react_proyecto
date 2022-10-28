import React from 'react'
import Item from './Item'
import "./Item.css"

function ItemListContainer(props) {
  return (
    <div>
      <h3>{props.greeting}</h3>
      <div className='itemContainer'>
        <Item imgUrl="/imgs/p1.png" title="producto1" price="100" />
        <Item imgUrl="/imgs/p2.png" title="producto2" price="200" />
        <Item imgUrl="/imgs/p3.png" title="producto3" price="300" />
      </div>
    </div>
  )
}

export default ItemListContainer