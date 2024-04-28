import React from 'react';

const RegistroUsuario = ({ nombre, correo, contrasena, onChangeNombre, onChangeCorreo, onChangeContrasena, onSubmit }) => {
  return (
    <div className="registro-container">
      <form className="registro-form" onSubmit={onSubmit}>
        <h2>Registro</h2>
        <input 
          value={nombre} 
          type="text" 
          placeholder="Ingresa tu nombre" 
          onChange={onChangeNombre} 
        />
        <input 
          value={correo} 
          type="email" 
          placeholder="Ingresa tu correo electrónico" 
          onChange={onChangeCorreo} 
        />
        <input 
          value={contrasena} 
          type="password" 
          placeholder="Ingresa tu contraseña" 
          onChange={onChangeContrasena} 
        />
        <input type="submit" value="Registrarse" />
        <div className="links">
        </div>
      </form>
    </div>
  );
}

export default RegistroUsuario;
