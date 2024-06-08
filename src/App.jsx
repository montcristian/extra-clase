import { useNavigate } from "react-router-dom";
import Login from './component/layout/auth/Login.jsx'
import Contenido from "./component/layout/pages/Contenido.jsx";
import RegistroUsuario from "./component/layout/auth/RegistroUsuario.jsx";
import ReservaUsuario from "./component/layout/users/ReservaUsuario.jsx"
import Reserva from "./component/layout/auth/Reserva.jsx";
import EditarReserva from "./component/layout/users/EditarReserva.jsx";

function App() {

  

  
 
  return (
    <>
      <Login/>

      <RegistroUsuario/>

      <Contenido />

      <Reserva/>
     
      <ReservaUsuario/>

      <EditarReserva/>

    </>
  );
}

export default App;
