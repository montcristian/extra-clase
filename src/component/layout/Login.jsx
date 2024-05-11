import React from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';

const Login = () => {
  const navigate = useNavigate();

  const BotonLogin = () => {
    // Aquí puedes colocar la lógica de autenticación si es necesario
    // Por ahora, simplemente redirigimos al usuario a la página de Contenido
    navigate('/contenido');
  };

  const botonRegistro = () => {
    navigate('/registroUsuario');
  };

  return (
    <div className="container">
      <div className="image-container">
        <img src="logotipo.png" alt="logo" />
      </div>
      <div className="login-container">
        <form className="login-form">
          <h2>Iniciar sesión</h2>
          <input type="text" placeholder="Ingresa tu usuario" />
          <input type="password" placeholder="Ingresa tu contraseña" />
          <input type="button" value="Iniciar Sesión" onClick={BotonLogin} />
          <div className="links">
            <li><a href="#" onClick={botonRegistro}>Registrarse</a></li> 
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
