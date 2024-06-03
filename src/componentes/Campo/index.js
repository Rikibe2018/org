//import { useState } from "react"
import "./Campo.css"

const Campo = (props) => {

  //  const[valor, setValor]=useState('')
  const {type = "text"} = props
    
    const handlerChange =(e)=>{
        props.actualizarValor(e.target.value)
    }

    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input 
            placeholder={props.placeholder} 
            required={props.required} 
            value={props.valor}
            onChange= {handlerChange}   
            type= {type}
        />
    </div>
}

export default Campo