import { useNavigate } from "react-router-dom";
import './Reservar.css'
//comentario en reserva
//comentaro 2

const Reserva = () => {
    //inicio navegador
    const navigate = useNavigate();

    const botonReservar = () => {
        // Aquí puedes colocar la lógica de autenticación si es necesario
        // Por ahora, simplemente redirigimos al usuario a la página de Contenido
        navigate('/contenido');
    };
    const cancelarRegistro = () => {
        // Redirigir al usuario a la página de Contenido
        navigate('/contenido');
    };
    //termina  navegador
    return (
        <div className="container">
            <div className="image-container">
                <img src="logo23.PNG" alt="logo" />
            </div>
            <div className="ReservaContainer">
                <div className="FormContainer">
                    <h2>Reserva tu equipo</h2>
                    <form className="ReservaForm" >
                        <div>
                            <input type="text" id="nombre" placeholder="Nombre" />
                        </div>
                        <div>
                            <input type="text" id="apellido" placeholder="Apellido" />
                        </div>
                        <div>
                            <input type="email" id="email" placeholder="Email" />
                        </div>
                        <div>
                            <input type="date" id="fecha" placeholder="Fecha" />
                        </div>
                        <div>
                            <input type="time" id="hora" placeholder="Hora" />
                        </div>
                        <div>
                            <input type="checkbox" id="aceptarTerminos" />
                            <label htmlFor="aceptarTerminos">Acepto los términos y condiciones de la política de la sala</label>
                        </div>
                        <div className="ButtonContainer">
                            <button type="submit" onClick={botonReservar}>reservar</button>
                            <button type="button" onClick={cancelarRegistro}>Cancelar Registro</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Reserva;
