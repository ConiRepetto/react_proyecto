// import logo from './logo.svg';
// import './App.css';
// import Button from './components/Button';
// import ItemListContainer from './ItemList/ItemListContainer';
// import { NavDropdown } from 'react-bootstrap';
import NavBar from './components/NavBar';

function App() { //funcion con nombre de componente, retornando algo que se muestra en el DOM
  // const title = 'Proyecto Coni 25/10'

  // /* CSS-in-JS */
  // const styleH3 = {backgroundColor:"pink", color: "white"}
  
  // let titulo = <h3 style={styleH3}>Hola! 👽</h3>

  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>


        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          {title}
        </p>
        <Button text= 'Boton1' color='purple' />
        <ItemListContainer/> */}
      </header>
    </div>

  );
}

export default App;
