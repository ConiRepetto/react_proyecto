import { useState, useEffect } from 'react' //
import "./Item.css"
import getItems from '../../Services/mockService'//
import { useParams } from "react-router-dom" //
import ItemList from "./ItemList";
import Loader from "../Loaders/loader";

function ItemListContainer(props) {
    const [products, setProducts] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    const { idCategory } = useParams();
    console.log(useParams())

    async function getItemsAsync() {
        getItems(idCategory).then(respuesta => {
            setProducts(respuesta);
            setIsLoading(false);
        })

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