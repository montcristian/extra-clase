import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';
import { connDatabase } from "../config/fireBaseConfig";
import { collection, getDocs } from "firebase/firestore";

const Login = () => {
  const navigate = useNavigate();
  const [usuarios, setUsuarios] = useState([]);
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  async function getUsuarios() {
    try {
      let collectionUsuarios = collection(connDatabase, 'usuarios');
      let resultado = await getDocs(collectionUsuarios);
      setUsuarios(resultado.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log("Usuarios obtenidos:", resultado.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
    }
  }

  useEffect(() => {
    getUsuarios();
  }, []);

  const buscarUsuario = () => {
    console.log("Buscando usuario:", user);
    let estado = usuarios.some((usuario) => {
      console.log(`Comparando con usuario: ${usuario.user}, contraseña: ${usuario.password}`);
      return usuario.user.trim().toLowerCase() === user.trim().toLowerCase() && usuario.password.trim() === password.trim();
    });
    return estado;
  };

  const iniciarSesion = () => {
    if (buscarUsuario()) {
      console.log("Bienvenido");
      navigate('/contenido');
    } else {
      console.log("Error de credenciales");
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
