import React from 'react';
import './Reservar.css'

const Reserva = ({ nombre, apellido, email, fecha, hora, aceptarTerminos, setNombre, setApellido, setEmail, setFecha, setHora, setAceptarTerminos, handleSubmit }) => {
    return (
        <div className="ReservaContainer">
            <div className="FormContainer">
                <h2>Reserva tu equipo</h2> 
                <form className="ReservaForm" onSubmit={handleSubmit}>
                    <div>
                        <input type="text" id="nombre" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    </div>
                    <div>
                        <input type="text" id="apellido" placeholder="Apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                    </div>
                    <div>
                        <input type="email" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <input type="date" id="fecha" placeholder="Fecha" value={fecha} onChange={(e) => setFecha(e.target.value)} />
                    </div>
                    <div>
                        <input type="time" id="hora" placeholder="Hora" value={hora} onChange={(e) => setHora(e.target.value)} />
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
