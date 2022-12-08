import "./Button.css"
import React, {useState} from "react"; //para que funcione el handleClick


function Button(props){ //Nombre del componente
    const [colorBtn, setColorBtn] = useState(props.colorBtn); //siempre usar Set + algo. 

    function handleClick(){
      setColorBtn('grey')
      props.onClick && props.onClick();//si el boton cuando lo llamo tiene esta prop, la puede ejecutar
    }

    return (
    <div className="itemButton">
      <button onClick={handleClick} style={{backgroundColor: colorBtn}} disabled={props.disabled} type={props.type}> {props.children} </button>
    </div> //retorno
    )
  }
  
  
  export default Button;
  