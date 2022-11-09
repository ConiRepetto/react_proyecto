import { useState, useEffect } from "react";
import { getSingleItem } from "../../Services/mockService";
import ItemDetail from "./ItemDetail";


function ItemDetailContainer(props) {
    const [product, setProduct] = useState([]);

    async function getItemsAsync() {
        let respuesta = await getSingleItem();
        setProduct(respuesta);
    }

    useEffect(
        () => {
            getItemsAsync();
        }, []);

    return (
        <div>
            <ItemDetail
                key={product.id}
                imgUrl={product.thumbnail}
                title={product.title}
                price={product.price}
                description={product.description}
            />
        </div >
    )
}

export default ItemDetailContainer;