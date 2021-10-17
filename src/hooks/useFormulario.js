import { useState } from "react";

const useFormulario = (initial) => {

    const [formulario, setFormulario] = useState(initial);
    const handleChange = ({ target }) => {
        setFormulario({
            ...formulario,
            [target.name]: target.value
        })
    }

    const reset = () => {
        setFormulario(initial);
    }
    
    return [formulario, handleChange, reset];
}

export default useFormulario;