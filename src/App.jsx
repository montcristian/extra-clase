import { useNavigate } from "react-router-dom";
import Login from './component/layout/auth/Login.jsx'
import Contenido from "./component/layout/pages/Contenido.jsx";
import RegistroUsuario from "./component/layout/pages/RegistroUsuario.jsx";
import ReservaUsuario from "./component/layout/ReservaUsuario.jsx";
import Reserva from "./component/layout/pages/Reserva.jsx"
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
