import React from 'react';
import './ReservaUsuario.css';
import { useNavigate } from "react-router-dom";

function ReservaUsuario() {
    const navigate = useNavigate(); // Obtener la función de navegación

    const botonContenido = () => {
        // Aquí puedes colocar la lógica de autenticación si es necesario
        // Por ahora, simplemente redirigimos al usuario a la página de Contenido
        navigate('/contenido');
    };

    return (
        <div className="container">
            <div className="image-container">
                <img src="logo23.PNG" alt="logo" />
            </div>
            <div className="Reservas">
                <h3>Historial de Reservas</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Email</th>
                            <th>Fecha</th>
                            <th>Hora</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Juan</td>
                            <td>Pérez</td>
                            <td>juan@example.com</td>
                            <td>2024-05-26</td>
                            <td>10:00</td>
                        </tr>
                        {/* Ejemplo de una reserva */}
                        <tr>
                            <td>Juan</td>
                            <td>Pérez</td>
                            <td>juan@example.com</td>
                            <td>2024-05-26</td>
                            <td>10:00</td>
                        </tr>
                        {/* Puedes agregar más filas de reservas aquí si lo deseas */}
                    </tbody>
                </table>
            </div>
            <div className="ButtonContenido">
                <button type="button" onClick={botonContenido}>Home</button>
            </div>
        </div>
    );
}

export default ReservaUsuario;
