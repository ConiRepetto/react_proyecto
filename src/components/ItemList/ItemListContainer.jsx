import { useState, useEffect } from 'react' //
import "./Item.css"
import getItems from '../../Services/firestore'//
import { useParams } from "react-router-dom" //
import ItemList from "./ItemList";
import Loader from "../Loaders/loader";

function ItemListContainer(props) {
    const [products, setProducts] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    const { idCategory } = useParams();


    async function getItemsAsync() {
        let respuesta = await getItems(idCategory);
        setProducts(respuesta);
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