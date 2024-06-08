import { useNavigate } from "react-router-dom";
import './Reservar.css'
import React, { useEffect, useState } from "react";
import { connDatabase } from "../config/fireBaseConfig";
import { collection, getDocs, addDoc } from "firebase/firestore";
import Swal from "sweetalert2";

const Reserva = () => {
  const navigate = useNavigate();
  const [reservas, setReservas] = useState([]);
  const [nombre, setNombre] = useState('');
  const [apellido,setApellido ] = useState('');
  const [email,setEmail ] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [equipo, setEquipo] = useState('');
  const [programa, setPrograma] = useState('');
  const [tiempo, setTiempo] = useState('');

  async function getReservas() {
    let collectionReservas = collection(connDatabase, "reservas");
    let resultado = await getDocs(collectionReservas);
    setReservas(resultado.docs.map((doc) => ({ ...doc.data() })));
    console.log(resultado.docs.map((doc) => ({ ...doc.data() })));
  }

  useEffect(() => {
    getReservas();
  }, []);

  const buscarReserva = () => {
    let estado = reservas.some(
      (usuario) => usuario.nombre === nombre
    );
    return estado;
  };

  function confirmar() {
    Swal.fire({
      title: "¿Está seguro que  quiere reservar?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, registrarme"
    }).then((result) => {
      if (result.isConfirmed) {
       crearReserva ();
        Swal.fire({
          title: "¡Reserva confirmada!",
          text: "Reserva guardada correctamente.",
          icon: "success"
        });
        navigate('/contenido'); 
      }
    });
  }

  async function   crearReserva() {
    let nuevaReserva = {
      nombre,
      apellido,
      email,
      fecha,
      hora,
      equipo,
      programa,
      tiempo,
    };
    let collectionReservas = collection(connDatabase, "reservas");
    await addDoc(collectionReservas, nuevaReserva);
  }

  const reservarEquipo = () => {
    if (!buscarReserva()) {
      confirmar();
    } else {
      Swal.fire({
        title: "¡Error!",
        text: "Reserva ya existe en la base de datos.",
        icon: "error"
      });
    }
  }

  const cancelar= () => {
    Swal.fire({
      title: "Cancelado!",
      text: "Has cancelado la reserva.",
      icon: "info"
    }).then(() => {
      navigate('/contenido');
    });
  };


    return (
        <div className="container">
    <div className="image-container">
        <img src="logo23.PNG" alt="logo" />
    </div>
    <div className="ReservaContainer">
        <div className="FormContainer">
            <h2>Reserva tu equipo</h2>
            <form className="ReservaForm">
                <div>
                    <input onChange={(e) => setNombre(e.target.value)} type="text" id="nombre" placeholder="Nombre" />
                </div>
                <div>
                    <input onChange={(e) => setApellido(e.target.value)} type="text" id="apellido" placeholder="Apellido" />
                </div>
                <div>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" id="email" placeholder="Email" />
                </div>
                <div>
                    <input onChange={(e) => setFecha(e.target.value)} type="date" id="fecha" placeholder="Fecha" />
                </div>
                <div>
                    <input onChange={(e) => setHora(e.target.value)} type="time" id="hora" placeholder="Hora" />
                </div>
                <div>
                    <input onChange={(e) => setEquipo(e.target.value)} type="text" id="numeroEquipo" placeholder="Número del equipo" />
                </div>
                <div>
                    <input onChange={(e) => setPrograma(e.target.value)} type="text" id="programaFormacion" placeholder="Programa de formación" />
                </div>
                <div>
                    <input onChange={(e) => setTiempo(e.target.value)} type="number" id="tiempoUso" placeholder="Tiempo de uso" />
                </div>
                <div>
                    <input type="checkbox" id="aceptarTerminos" />
                    <label htmlFor="aceptarTerminos">Acepto los términos y condiciones de la política de la sala</label>
                </div>
                <div className="ButtonContainer">
                    <button type="button" onClick={reservarEquipo }>Reservar</button>
                    <button type="button" onClick={cancelar}>Cancelar Registro</button>
                </div>
            </form>
        </div>
    </div>
</div>
    );
}

export default Reserva;
