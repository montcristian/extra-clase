import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';
import { connDatabase } from "../config/fireBaseConfig";
import { collection, getDocs } from "firebase/firestore";
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();
  const [usuarios, setUsuarios] = useState([]);
  const [user, setUser] = useState('');
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
      (usuario) => usuario.user === user && usuario.password === password);
    return estado;
  };

  const iniciarSesion = () => {
    if (buscarUsuario()) {
      Swal.fire({
        title: "Bienvenido...",
        text: "Será redireccionado al Home",
        icon: "success",
      }).then(() => {
        navigate("/contenido");
      });
    } else {
      Swal.fire({
        title: "Error",
        text: "Usuario y/o contraseña incorrecto",
        icon: "error",
      });
    }
  };

  const botonRegistro = () => {
    navigate('/registroUsuario');
  };

  return (
    <div className="container">
      <div className="image-container">
        <img src="logo23.PNG" alt="logo" />
      </div>
      <div className="login-container">
        <form className="login-form">
          <h2>Iniciar sesión</h2>
          <input
            onChange={(e) => setUser(e.target.value)}
            type="text" placeholder="Ingresa tu usuario"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Ingresa tu contraseña"
          />
          <input type="button" value="Iniciar Sesión" onClick={iniciarSesion} />
          <div className="links">
            <li><a href="#" onClick={botonRegistro}>Registrarse</a></li>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
