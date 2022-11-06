import { useState, useEffect } from 'react'
import Item from './Item'
import "./Item.css"
import getItems from '../../Services/mockService'

function ItemListContainer(props) {
  const [products, setProducts] = useState([]);

  useEffect(
    () => {
      getItems().then((respuestaDatos) => {
        setProducts(respuestaDatos);
      }); //para tomar el resultado 
    },
    []
  )

  return (
    <div>
      <h3>{props.greeting}</h3>
      <div className='itemContainer'>
        {
          products.map((product) => { //Map > itera sobre e array de productos y aplica los datos que saco de el array a mi componente Item
            return (
              <Item
                key={product.id}
                imgUrl={product.thumbnail}
                title={product.title}
                price={product.price}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default ItemListContainer