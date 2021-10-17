import './Input.css'
const Input = ({label, ...rest}) => {
    return(
        <div className="field">
            <label>{label}</label>
            <input {...rest} placeholder={label}/>
      </div>
    )
}

export default Input
