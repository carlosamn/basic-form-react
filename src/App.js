
import Card from './components/Card'
import Container from './components/Container'
import UserForm from './components/UserForm'
import { useState } from "react";

function App() {
  const [usuarios, setUsuarios] = useState([]);
  
  
  const submit = (usuario) => {
    setUsuarios([
      ...usuarios,
      usuario
    ])
  }
  console.log(usuarios)
  return (
    <div style={{marginTop: 15}}>
      <Container>
        <div style={{padding: 20}}></div>
        <Card>
          <UserForm submit={submit}></UserForm>
        </Card>
        <Card>
         <ul>
           {usuarios.map(x => 
             <li> {`${x.name} ${x.lastname}: ${x.email}`}</li>
           )}
         </ul>
        </Card>
      </Container>
    </div>
    
  );
}

export default App;
