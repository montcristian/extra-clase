import { useNavigate } from "react-router-dom";
import './Contenido.css'


const Contenido = () => {
    const navigate = useNavigate();

    const botonReservas = () => {
      
        navigate('/reserva');
    };
    const BotonReservaUsuario = () => {

        navigate('/reservaUsuario');
    };
    const BotonCerrarSesion = () => {

        navigate('/login');
    };
    //termina  navegador


    return (

        <div>
            <nav className="navbar">
                <ul>
                <li className="icono-navbar"><img src="icon.png" alt="icon" /></li> 
                    <li><a href="#" onClick={botonReservas}>Reservar</a></li>
                    <li><a href="#" onClick={BotonReservaUsuario}>Ver Reserva</a></li>
                    <li><div className="cerrar-sesion"><a href="#" onClick={BotonCerrarSesion}>Cerrar sesion</a></div></li>
                </ul>
            </nav>

            <div className="image-container">
                <div className="item">
                    <img src="menu1.png" alt="Imagen1" />
                    <div className="text">
                        <h3 id="detalles">Detalles</h3>
                        <p>Se debe responder por los daños. Antes de hacer uso del equipo, verificar que esté en óptimas condiciones.</p>
                    </div>
                </div>
                <div className="item">
                    <img src="menu2.png" alt="Imagen2" />
                    <div className="text">
                        <h3>Servicios</h3>
                        <p>Este servicio se presta para estudiantes de la institución.</p>
                    </div>
                </div>
                <div className="item">
                    <img src="menu4.png" alt="Imagen3" />
                    <div className="text">
                        <h3>Contacto</h3>
                        <p>Nuestros contactos son:</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contenido;
