import "./ListaOpciones.css"

const ListaOpciones = (props) => {

    //Método map -> arreglo.map( (equipo) => {
        // return <option></option>
    //})

    const manejarCambio = (e) => {
        console.log("cambio", e.target.value)
        props.actualizarEquipo(e.target.value)
    }

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            {/* <option>Programación</option>
            <option>Front End</option>
            <option>Data Science</option>
            <option>Devops</option>
            <option>UX y Diseño</option>
            <option>Móvil</option>
            <option>Innovación y Gestión</option> */}
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            { props.equipos.map( (equipo, index) => <option key={index}>{equipo}</option> )}
        </select>
    </div>
}

export default ListaOpciones