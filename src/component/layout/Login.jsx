import React from 'react';
import './Login.css';

const Login = ({ usuario, contrasena, onChangeUsuario, onChangeContrasena }) => {
  return (
    <div className="container">
      <div className="image-container">
        <img src="logotipo.png" alt="logo" />
      </div>
      <div className="login-container">
        <form className="login-form">
          <h2>Iniciar sesión</h2>
          <input 
            value={usuario} 
            type="text" 
            placeholder="Ingresa tu usuario" 
            onChange={onChangeUsuario} 
          />
          <input 
            value={contrasena} 
            type="password" 
            placeholder="Ingresa tu contraseña" 
            onChange={onChangeContrasena} 
          />
          <input type="button" value="Iniciar Sesión" />
          <div className="links">
            <li><a href="#">Registrarse</a></li> 
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
