import { useNavigate } from "react-router-dom";
import './RegistroUsuario.css'
import React, { useEffect, useState } from "react";
import { connDatabase } from "../config/fireBaseConfig";
import { collection, getDocs, addDoc } from "firebase/firestore";
import Swal from "sweetalert2";

const RegistroUsuario = () => {
  const navigate = useNavigate();
  const [usuarios, setUsuarios] = useState([]);
  const [user, setUser] = useState('');
  const [edad, setEdad] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function getUsuarios() {
    let collectionUsuarios = collection(connDatabase, "usuarios");
    let resultado = await getDocs(collectionUsuarios);
    setUsuarios(resultado.docs.map((doc) => ({ ...doc.data() })));
    console.log(resultado.docs.map((doc) => ({ ...doc.data() })));
  }

  useEffect(() => {
    getUsuarios();
  }, []);

  const buscarUsuario = () => {
    let estado = usuarios.some(
      (usuario) => usuario.user === user
    );
    return estado;
  };

  function confirmar() {
    Swal.fire({
      title: "¿Está seguro que se quiere registrar?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, registrarme"
    }).then((result) => {
      if (result.isConfirmed) {
        crearUsuario();
        Swal.fire({
          title: "¡Registro confirmado!",
          text: "Usuario registrado correctamente.",
          icon: "success"
        });
        navigate('/login'); 
      }
    });
  }

  async function crearUsuario() {
    let nuevoUsuario = {
      user,
      password,
      email,
      edad,
    };
    let collectionUsuarios = collection(connDatabase, "usuarios");
    await addDoc(collectionUsuarios, nuevoUsuario);
  }

  const registrarUsuario = () => {
    if (!buscarUsuario()) {
      confirmar();
    } else {
      Swal.fire({
        title: "¡Error!",
        text: "Usuario ya existe en la base de datos.",
        icon: "error"
      });
    }
  }

  const cancelar= () => {
    Swal.fire({
      title: "Cancelado!",
      text: "Has cancelado el registro.",
      icon: "info"
    }).then(() => {
      navigate('/login');
    });
  };

  return (
    <div className="container">
      <div className="image-container">
        <img src="logo23.PNG" alt="logo" />
      </div>
      <div className="registro-container">
        <form className="registro-form">
          <h2>Registro de usuario</h2>
          <input onChange={(e) => setUser(e.target.value)}
            type="text"
            placeholder="Ingresa tu nombre completo"
          />
          <input onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Ingresa tu correo electrónico"
          />
          <input onChange={(e) => setEdad(e.target.value)}
            type="number"
            placeholder="Ingresa tu edad"
          />
          <input onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Ingresa tu contraseña"
          />
          <input type="button" value="Registrarse" onClick={registrarUsuario} />
          <input type="button" value="Cancelar" onClick={cancelar} />
        </form>
      </div>
    </div>
  );
}

export default RegistroUsuario;
