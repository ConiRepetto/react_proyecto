import "./Button.css"

function Button(contenido){ //Nombre del componente
    
    const styleButton = {backgroundColor: contenido.color}

    return <button style={styleButton} className="css-button-sliding-to-left--rose">{contenido.text}</button> //retorno
  }
  
  
  export default Button;
  