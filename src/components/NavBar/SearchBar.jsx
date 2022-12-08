import { useState, useEffect, useCallback } from "react";
import { getSearchItems } from "../../Services/firestore";
import "./NavBar.css"
import ItemList from "../ItemList/ItemList";
import {Link} from "react-router-dom";
import Loader from "../Loaders/loader";

function NavBarSearch(props) {
    const [products, setProducts] = useState(null);
    const [searchKeyword, setSearchKeyword] = useState("");

    async function getItemsAsync() {
        let respuesta = await getSearchItems(searchKeyword);
        setProducts(respuesta);
    }
    function handleFavorite(id) {
        console.log("item agregado a favoritos:", id);
    }

    const handleFavoriteMemo = useCallback(handleFavorite, []);

    useEffect(() => {
        getItemsAsync();
    }, []);

    function handleSearch(evt) {
        setSearchKeyword(evt.target.value);
    }

    function handleSearchForm(evt) {
        evt.preventDefault();
        getItemsAsync();
    }

    return (
        <div>
            <form className="formContainer" onSubmit={handleSearchForm}>
                <div className="inputContainer">
                    <input onChange={handleSearch} name="search"
                        //onKeyDown={handleKeyDown}//evento onKyDown, se activa cuando el usuario presiona una tecla
                        type="search"
                        className="inputBuscar"
                        id="ejemplo"
                        aria-label="Search"
                        placeholder={props.placeholder} />
                </div>
                <div>
                    <Link to="/">
                        <button
                            type="submit"
                            className="buttonBuscar">Buscar</button>
                    </Link>
                </div>
            </form>
            {products ? <ItemList handleFavorite={handleFavorite} products={products} /> : <Loader />}

        </div>


    );
}

export default NavBarSearch;