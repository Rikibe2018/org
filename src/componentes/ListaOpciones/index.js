import "./ListaOpciones.css"

const ListaOpciones = (props) => {
   

    const manejarCambio=(e)=>{
        props.actualizarValor (e.target.value)
    }

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" defaultValue="" hidden disabled >Seleccionar equipo...</option>
            {props.equiposTitulos.map((equipo, index)=><option key={index} value={equipo}>{equipo}</option>)}

        </select>
    </div>
}
export default ListaOpciones;