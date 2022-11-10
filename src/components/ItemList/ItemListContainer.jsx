import { useState, useEffect } from 'react'
import Item from './Item'
import "./Item.css"
import getItems from '../../Services/mockService'
import { useParams } from "react-router-dom"

function ItemListContainer(props) {
  const [products, setProducts] = useState([]);

  const { idCategory } = useParams();

  async function getItemsAsync() {
    let respuesta = await getItems(idCategory)
    setProducts(respuesta);
  }

  useEffect(() => {
    getItemsAsync();
  },
    [idCategory]) //para que vuelva a ejecutar el efecto cada vez que se cambia el idCategory

  return (
    <div>
      <h3>{props.greeting}</h3>
      <div className='itemContainer'>
        {
          products.map((product) => { //Map > itera sobre e array de productos y aplica los datos que saco de el array a mi componente Item
            return (
              <Item
                key={product.id}
                id={product.id}
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