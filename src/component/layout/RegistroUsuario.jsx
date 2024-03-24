import React from 'react';
import './RegistroUsuario.css'
const RegistroUsuario = ({ nombre, correo, contrasena, edad, onChangeNombre, onChangeCorreo, onChangeEdad, onChangeContrasena, onSubmit }) => {
  return (
    <div className="registro-container">
      <form className="registro-form" onSubmit={onSubmit}>
        <h2>Registro de usuario</h2>
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
          value={edad} 
          type="number" 
          placeholder="Ingresa tu edad" 
          onChange={onChangeEdad} 
        />
        <input 
          value={contrasena} 
          type="password" 
          placeholder="Ingresa tu contraseña" 
          onChange={onChangeContrasena} 
        />
     
        <input type="submit" value="Registrarse" />
        
      </form>
    </div>
  );
}

export default RegistroUsuario;
