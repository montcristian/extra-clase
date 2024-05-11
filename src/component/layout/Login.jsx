
import './Login.css';

const Login = () => {
  return (
    <div className="container">
      <div className="image-container">
        <img src="logotipo.png" alt="logo" />
      </div>
      <div className="login-container">
        <form className="login-form">
          <h2>Iniciar sesión</h2>
          <input 
          
            type="text" 
            placeholder="Ingresa tu usuario" 
           
          />
          <input 
           
            type="password" 
            placeholder="Ingresa tu contraseña" 
           
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
