import { useNavigate } from "react-router-dom";
import Login from "./component/layout/Login";
import RegistroUsuario from './component/layout/RegistroUsuario';
import Contenido from './component/layout/Contenido';
import Reserva from './component/layout/Reserva';

function App() {

  

  
 
  return (
    <>
      <Login/>

      <RegistroUsuario/>

      <Contenido />

      <Reserva/>
    </>
  );
}

export default App;
