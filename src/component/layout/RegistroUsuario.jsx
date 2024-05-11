
import './RegistroUsuario.css'
const RegistroUsuario = ( ) => {
  return ( 
    <div className="registro-container">
      <form className="registro-form">
        <h2>Registro de usuario</h2>
        <input 
         
          type="text" 
          placeholder="Ingresa tu nombre" 
        
        />
        <input 
        
          type="email" 
          placeholder="Ingresa tu correo electrónico" 
          
        />
           <input 
        
          type="number" 
          placeholder="Ingresa tu edad" 
    
        />
        <input 
        
          type="password" 
          placeholder="Ingresa tu contraseña" 
        
        />
     
        <input type="submit" value="Registrarse" />
        
        <input type="submit" value="cancelar" />
      </form>
    </div>
  );
}

export default RegistroUsuario;
