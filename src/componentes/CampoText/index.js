import './CampoText.css'

const CampoText = (props) => {

    const labelModificada = `${props.label}`
    const placeholderModificado = `${props.placeholder}...`


    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className='campo-text'>
            <label>{labelModificada}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificado} />
        </div>

    )

}

export default CampoText 