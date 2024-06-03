import { useState } from 'react'
import './Formulario.css'
import Campo from '../Campo'
import ListaOpciones from '../ListaOpciones'
import Boton from '../Boton'


const Formulario = (props) => {
    const [nombre, setNombre] = useState('')
    const [puesto, setPuesto] = useState('')
    const [foto, setFoto] = useState('')
    const [equipo, setEquipo] = useState('')

    const [titulo, setTitulo]= useState()
    const [color, setColor] = useState()

    const { registrarColaborador, crearEquipo } = props

    const handlerSendColaborador = (e) => {
        e.preventDefault()
        const datosEnvio = {
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosEnvio)
        // console.log(datosEnvio)
    }

    const handlerSendEquipo=(e)=>{
        e.preventDefault()
        crearEquipo({titulo,colorPrimario:color})
    }

    return <section className='formulario'>

        <form onSubmit={handlerSendColaborador}>
            <h2> Rellena el Formulario para crear el colaborador</h2>
            <Campo titulo="Nombre"
                placeholder="Ingrese nombre..."
                valor={nombre}
                actualizarValor={setNombre}
                required
            />
            <Campo titulo="Puesto"
                placeholder="Ingrese puesto..."
                valor={puesto}
                actualizarValor={setPuesto}
                required
            />
            <Campo titulo="Foto"
                placeholder="Ingrese enlace de foto..."
                valor={foto}
                actualizarValor={setFoto}
                required
            />
            <ListaOpciones equiposTitulos={props.equiposTitulos} valor={equipo} actualizarValor={setEquipo} />
            <Boton>
                Crear
            </Boton>
        </form>
        <form onSubmit={handlerSendEquipo}>
            <h2> Rellena el Formulario para crear el equipo</h2>
            <Campo 
                titulo="Titulo"
                placeholder="Ingrese titulo..."
                valor={titulo}
                actualizarValor={setTitulo}
                required
            />
            <Campo
                titulo="Color"
                placeholder="Ingrese color en Hex..."
                valor={color}
                actualizarValor={setColor}
                required
                type="color"
            />
             <Boton>
                Registrar Equipo
            </Boton>
        </form>
    </section>
}

export default Formulario