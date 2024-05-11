import React from "react";
import { useNavigate } from "react-router-dom";
import './RegistroUsuario.css'


//inicio navegador
const RegistroUsuario = () => {
  const navigate = useNavigate(); //Navegador

  
  const handleRegister = () => {

    navigate('/login');
  };

  const handleCancel = () => {

    navigate('/login');
  };
  //termina navegador

  return (
    <div className="registro-container">
      <form className="registro-form">
        <h2>Registro de usuario</h2>
        <input type="text" placeholder="Ingresa tu nombre" />
        <input type="email" placeholder="Ingresa tu correo electrónico" />
        <input type="number" placeholder="Ingresa tu edad" />
        <input type="password" placeholder="Ingresa tu contraseña" />
        <input type="submit" value="Registrarse" onClick={handleRegister} />
     <input type="button" value="Cancelar" onClick={handleCancel} />

      </form>
    </div>
  );
}

export default RegistroUsuario;
