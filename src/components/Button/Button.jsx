import "./Button.css"

function Button(props){ //Nombre del componente
    
    function handleClick(){
      alert("CLICK");
    }

    return (
    <div className="itemButton">
      <button onClick={handleClick} style = {{backgroundColor: props.color}}> {props.text} </button>
    </div> //retorno
    )
  }
  
  
  export default Button;
  