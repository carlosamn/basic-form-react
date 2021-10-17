
import useFormulario from '../hooks/useFormulario';
import Input from './input'
import Button from './Button'

const UserForm = ({submit}) => {
    const [formulario, handleChange, reset] = useFormulario({name:'', lastname: '', email:''})

    const handleSubmit = (e) => {
        e.preventDefault();
        submit(formulario);
        reset()
    }

    return(
        <form onSubmit={handleSubmit}>
            <Input label="Name" name="name"  value={formulario.name} onChange={handleChange}/>
            <Input label="Lastname" name="lastname"  value={formulario.lastname} onChange={handleChange}/>
            <Input label="Email" name="email"  value={formulario.email} onChange={handleChange}/>
            <Button>Send</Button>
          </form>
    )
}

export default UserForm;