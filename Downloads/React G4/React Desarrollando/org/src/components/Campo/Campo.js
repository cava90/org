import "./Campo.css"

const Campo = (props) => {
    const placeholderModificado = `${props.placeholder + props.titulo.toLowerCase()}...`

    // Destructuración
    const { type = "text", titulo, required, valor } = props

    const manejarCambio = (e) => {
       props.actualizarValor(e.target.value)
    }

    return <div className={`campo campo-${type}`}>
        <label>{titulo}</label>
        <input
            placeholder={placeholderModificado}
            type={type}
            required={required}
            value={valor}
            onChange={manejarCambio}/>
    </div>
}

export default Campo