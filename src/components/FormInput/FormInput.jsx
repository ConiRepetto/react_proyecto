import React from "react";
import "../NavBar/NavBar.css"
import { findItem } from "../../Services/mockService";
import {Link} from "react-router-dom";

function FormInput(props) {
    // function handleSearch(evt) {
    //     const inputValue = evt.target.value;
    //     console.log(inputValue);
    //     findItem(inputValue);
    //     let urlFind = `/detail/${id}`;
    //     const [product, setProduct] = useState([]);
    //     const { id } = useParams();
    //     console.log(useParams())
    //     async function getItemsAsync() {
    //         let respuesta = await findItem(id);
    //         setProduct(respuesta);
    //     }
    //     useEffect(
    //         () => {
    //             getItemsAsync();
    //         }, []);
    // }

    function handleSubmit(evt) {
        evt.preventDefault();
    }

    function handleKeyDown(evt) {
        if (props.blockChar.includes(evt.key)) { //comparo las teclas bloqueadas con las keys presionadas en el input
            evt.preventDefault();
        }
    }

    return (
        <form className="formContainer">
            <div className="inputContainer">
                <input
                    onKeyDown={handleKeyDown}//evento onKyDown, se activa cuando el usuario presiona una tecla
                    type="search"
                    className="inputBuscar"
                    id="ejemplo"
                    aria-label="Search"
                    placeholder={props.placeholder} />
            </div>
            <div>
            <Link to="/">
                <button
                    //onClick={handleSearch}
                    type="search"
                    className="buttonBuscar">Buscar</button>
            </Link>
            </div>
        </form>
    )
}

export default FormInput