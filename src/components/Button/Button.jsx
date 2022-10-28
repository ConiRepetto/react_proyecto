import "./Button.css"
import React, {useState} from "react"; //para que funcione el handleClick


function Button(props){ //Nombre del componente
    const [colorBtn, setColorBtn] = useState(props.color); //siempre usar Set + algo. 

    function handleClick(){
      setColorBtn('grey')
    }

    return (
    <div className="itemButton">
      <button onClick={handleClick} style={{backgroundColor: colorBtn}}> {props.text} </button>
    </div> //retorno
    )
  }
  
  
  export default Button;
  