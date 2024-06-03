
import Colaborador from '../Colaborador';
import './Equipo.css';
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) => {
    const { colorPrimario, titulo, id } = props.datos
    const { colaboradores, eliminarColaborador, actualizarColor, like } = props
    const obj = {
        backgroundColor: hexToRgba(colorPrimario, 0.6)
    }
    const estiloTitulo = { borderColor: colorPrimario }
    return <>{colaboradores.length > 0 &&
        <section className="equipo" style={obj}>
            <input type='color'
             value={colorPrimario} 
             onChange={(event)=>{
                actualizarColor(event.target.value, id)
             }}
             className='input-color'
             />
            <h3 style={{ estiloTitulo,borderColor: colorPrimario }}>{titulo}</h3>
            <div className="colaboradores">
                {
                    colaboradores.map((colaborador, index) => <Colaborador
                        datos={colaborador}
                        colorPrimario={colorPrimario}
                        key={index}
                        eliminarColaborador={eliminarColaborador}
                        like={like}
                    />)
                }

            </div>

        </section>
    }
    </>
}

export default Equipo