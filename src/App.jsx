import './App.css';
//import Button from './components/Button/Button';
import ItemListContainer from "./components/ItemList/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
//import * as iconList from "@fortawesome/free-solid-svg-icons";
import Footer from './components/Footer/Footer';

function App() { //funcion con nombre de componente, retornando algo que se muestra en el DOM
  //console.log(iconList);
  // /* CSS-in-JS */
  const styleH1 = {color: "#68a36d" }
  let title = <h1 style={styleH1}>Verde Fuir · Cosmetica Natural ·</h1>

  return (
    <div className="App">
      <header className="App-header">
        <NavBar imgurl="/imgs/logo_vf_sf.png" />
        {title}
        <ItemListContainer greeting="Todos nuestros productos" />
      </header>
    <Footer/>
    </div>

  );
}

export default App;
