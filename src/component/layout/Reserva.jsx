
import './Reservar.css'

const Reserva = () => {
    return (
        <div className="ReservaContainer">
            <div className="FormContainer">
                <h2>Reserva tu equipo</h2> 
                <form className="ReservaForm" >
                    <div>
                        <input type="text" id="nombre" placeholder="Nombre"  />
                    </div>
                    <div>
                        <input type="text" id="apellido" placeholder="Apellido" />
                    </div>
                    <div>
                        <input type="email" id="email" placeholder="Email"  />
                    </div>
                    <div>
                        <input type="date" id="fecha" placeholder="Fecha" />
                    </div>
                    <div>
                        <input type="time" id="hora" placeholder="Hora"  />
                    </div>
                    <div>
                        <input type="checkbox" id="aceptarTerminos" />
                        <label htmlFor="aceptarTerminos">Acepto los términos y condiciones de la política de la sala</label>
                    </div>
                    <div className="ButtonContainer">
                        <button type="submit">Reservar</button>
                        <button type="button" onClick={() => console.log("Registro cancelado")}>Cancelar Registro</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Reserva;
