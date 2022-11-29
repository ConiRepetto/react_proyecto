import './App.css';
import ItemListContainer from "./components/ItemList/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetails/ItemDetailsContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./context/cartContext"
import CartView from './components/CartView/CartView';
import { useParams } from "react-router-dom";


function App() { //funcion con nombre de componente, retornando algo que se muestra en el DOM
  //console.log(iconList);
  // /* CSS-in-JS */
  
  const styleH1 = { color: "#68a36d" }
  let title = <h1 style={styleH1}>Verde Fuir · Cosmetica Natural ·</h1>

  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <header className="App-header">
            <NavBar imgurl="/imgs/logo_vf_sf.png" />
            {title}
            <Routes>
              <Route path="/" element={<ItemListContainer greeting="Todos nuestros productos" />}></Route>
              <Route path="/category/:idCategory" element={<ItemListContainer greeting="Productos de Cuidado ${} " />}></Route>
              <Route path="/detail/:id" element={<ItemDetailContainer />}></Route>
              <Route path="/cart" element={<CartView/>}></Route>
              <Route path="*" element={<h1>ERROR, ESTA PAGINA NO EXISTE</h1>}></Route>
            </Routes>
          </header>
          <Footer />
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
