import React from "react";
import Item from "./Item";

function ItemList({ products }) {
    return (
        <div className="item-list">
            {products.map((product) => { //Map > itera sobre e array de productos y aplica los datos que saco de el array a mi componente Item
                    return (
                        <Item
                            key={product.id}
                            id={product.id}
                            imgUrl={product.thumbnail}
                            title={product.title}
                            price={product.price}
                            discount={product.discount}
                            stock={product.stock}
                            
                        />
                    )
                })
            }
        </div>
    );
}

export default React.memo(ItemList);






