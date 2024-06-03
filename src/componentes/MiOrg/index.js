
//import { useState } from 'react'
import './MiOrg.css'

const MiOrg = (props) => {
    /* const [mostrar, actualizarmostrar] = useState(true)

    const handlerClick = () => {
        actualizarmostrar(!mostrar)
    } */

    return <section className="orgSection">
        <h3 className='title'>Mi organización</h3>
        <img src="/img/add.png" alt="imagen Add" onClick={props.cambiarMostrar} />

    </section>
}

export default MiOrg;
