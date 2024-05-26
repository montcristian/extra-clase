import { useNavigate } from "react-router-dom";
import Login from './component/layout/auth/Login.jsx'
import RegistroUsuario from './component/layout/RegistroUsuario';
import Contenido from './component/layout/Contenido';
import Reserva from './component/layout/Reserva';
import ReservaUsuario from "./component/layout/ReservaUsuario.jsx";

function App() {

  

  
 
  return (
    <>
      <Login/>

      <RegistroUsuario/>

      <Contenido />

      <Reserva/>
     
      <ReservaUsuario/>

    </>
  );
}

export default App;
