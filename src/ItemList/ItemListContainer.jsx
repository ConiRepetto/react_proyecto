import React from 'react'
import Item from './Item'

function ItemListContainer() {
  return (
    <div>
        <h1>Mis Productos</h1>
        <Item imgUrl="" title="producto1" price="100"/>
        <Item imgUrl="" title="producto2" price="200"/>
        <Item imgUrl="" title="producto3" price="300"/>
    </div>
  )
}

export default ItemListContainer