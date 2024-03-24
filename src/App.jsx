import React, { useState } from 'react';
import Login from "./component/layout/Login";
import RegistroUsuario from './component/layout/RegistroUsuario';

function App() {
  /// Funciones y estados para el inicio de sesión
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");

  const handleChangeUsuario = (event) => {
    setUsuario(event.target.value);
  }

  const handleChangeContrasena = (event) => {
    setContrasena(event.target.value);
  }

  /// Funciones y estados para el registro de usuario
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasenaRegistro, setContrasenaRegistro] = useState("");
  const [edad, setEdad] = useState("");

  const handleChangeNombre = (event) => {
    setNombre(event.target.value);
  }

  const handleChangeCorreo = (event) => {
    setCorreo(event.target.value);
  }

  const handleChangeContrasenaRegistro = (event) => {
    setContrasenaRegistro(event.target.value);
  }

  const handleChangeEdad = (event) => {
    setEdad(event.target.value);
  }

  const handleSubmitRegistro = (event) => {
    event.preventDefault();
    // Aquí puedes realizar la lógica para enviar los datos del formulario de registro
  }

  return (
    <>
      <Login
        usuario={usuario}
        contrasena={contrasena}
        onChangeUsuario={handleChangeUsuario}
        onChangeContrasena={handleChangeContrasena}
      />

      <RegistroUsuario
        nombre={nombre}
        correo={correo}
        contrasena={contrasenaRegistro}
        edad={edad}
        onChangeNombre={handleChangeNombre}
        onChangeCorreo={handleChangeCorreo}
        onChangeContrasena={handleChangeContrasenaRegistro}
        onChangeEdad={handleChangeEdad}
        onSubmit={handleSubmitRegistro}
      />
    </>
  )
}

export default App;
