import React, { useState } from 'react';
import Login from "./component/layout/Login";
import RegistroUsuario from './component/layout/RegistroUsuario';
import Contenido from './component/layout/Contenido';
import Reserva from './component/layout/Reserva';

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
  const [nombreRegistro, setNombreRegistro] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasenaRegistro, setContrasenaRegistro] = useState("");
  const [edad, setEdad] = useState("");

  const handleChangeNombre = (event) => {
    setNombreRegistro(event.target.value);
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

  // Funciones y estados para la reserva 
  const [nombreReserva, setNombreReserva] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [aceptarTerminos, setAceptarTerminos] = useState(false);

  const handleChangeAceptarTerminos = () => {
    setAceptarTerminos(!aceptarTerminos);
  };

  // Función para manejar el envío del formulario de reserva
  const handleSubmitReserva = (e) => {
    e.preventDefault();
    if (aceptarTerminos) {
      // Aquí puedes enviar los datos del formulario a donde necesites
      alert('Reserva exitosa');
      // Puedes hacer alguna acción adicional aquí, como enviar los datos a un servidor
      // Por ejemplo, puedes usar fetch() o axios para enviar los datos a un servidor
    } else {
      alert('Debes aceptar los términos y condiciones para realizar la reserva.');
    }
  };

  return (
    <>
      <Login
        usuario={usuario}
        contrasena={contrasena}
        onChangeUsuario={handleChangeUsuario}
        onChangeContrasena={handleChangeContrasena}
      />

      <RegistroUsuario
        nombre={nombreRegistro}
        correo={correo}
        contrasena={contrasenaRegistro}
        edad={edad}
        onChangeNombre={handleChangeNombre}
        onChangeCorreo={handleChangeCorreo}
        onChangeContrasena={handleChangeContrasenaRegistro}
        onChangeEdad={handleChangeEdad}
        onSubmit={handleSubmitRegistro}
      />

      <Contenido />

      <Reserva
        nombre={nombreReserva}
        apellido={apellido}
        email={email}
        fecha={fecha}
        hora={hora}
        cantidad={cantidad}
        setNombre={setNombreReserva}
        setApellido={setApellido}
        setEmail={setEmail}
        setFecha={setFecha}
        setHora={setHora}
        setCantidad={setCantidad}
        aceptarTerminos={aceptarTerminos}
        onChangeAceptarTerminos={handleChangeAceptarTerminos}
        handleSubmit={handleSubmitReserva}
      />
    </>
  );
}

export default App;
