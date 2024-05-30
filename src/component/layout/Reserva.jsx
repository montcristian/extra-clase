import React from 'react'
import { useState } from 'react';
import ReservaUsuario from './ReservaUsuario';

const Reserva = () => {
    const [nombre, setNombre] = useState([]);
    const agregarRegistro = (nuevoNombre) => {
        setNombre([...nombre, nuevoNombre]);
      };

    return (
        <div>
            <ReservaUsuario registros={nombre}/>
        </div>
    )
}

export default Reserva