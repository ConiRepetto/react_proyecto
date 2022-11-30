import { useState, useEffect } from 'react' //
import "./Item.css"
import getItems, {getItemsByCat} from '../../Services/firestore'//

import { useParams } from "react-router-dom" //
import ItemList from "./ItemList";
import Loader from "../Loaders/loader";

function ItemListContainer(props) {
    const [products, setProducts] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    const { idCategory } = useParams();


    async function getItemsAsync() {
        if (!idCategory) {
            let respuesta = await getItems();
            setProducts(respuesta);
            
        } else {
            let respuesta = await getItemsByCat(idCategory)
            setProducts(respuesta);
        }
    setIsLoading(false);
    }

    useEffect(
        () => {
            getItemsAsync();
        }, [idCategory]);

    if (isLoading)
        return (<div><Loader /></div>)

    return (<ItemList products={products} />)

}


export default ItemListContainer