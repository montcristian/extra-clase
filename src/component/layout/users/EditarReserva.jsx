
import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { connDatabase } from "../config/fireBaseConfig";
import { collection, getDoc, addDoc, updateDoc, doc } from "firebase/firestore";
import Swal from "sweetalert2";
import './EditarReserva.css';

const EditarReserva = () => {
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
  let {id} = useParams();

  async function getUsuarioId(id) {
    let usuarioEditar= await getDoc(doc(connDatabase, "reservas",id));
    console.log(usuarioEditar);
    setNombre(usuarioEditar.data().nombre);
    setApellido(usuarioEditar.data().apellido);
    setEmail(usuarioEditar.data().email);
    setFecha(usuarioEditar.data().fecha);
    setHora(usuarioEditar.data().hora);
    setEquipo(usuarioEditar.data().equipo);
    setPrograma(usuarioEditar.data().programa);
    setTiempo(usuarioEditar.data().tiempo);
  }
  useEffect(() => {
    getUsuarioId(id);
  }, []);


  async function  editarUsuario() {
    let edicionReserva = {
      nombre,
      apellido,
      email,
      fecha,
      hora,
      equipo,
      programa,
      tiempo,
    };
    let enviarUsuario = doc(connDatabase, "reservas",id);
    await updateDoc(enviarUsuario,edicionReserva);
    navigate("/reservaUsuario")
    console.log(edicionReserva);
  }

  const cancelar= () => {
    Swal.fire({
      title: "Cancelado!",
      text: "Has cancelado la reserva.",
      icon: "info"
    }).then(() => {
      navigate('/reservaUsuario');
    });
  };


    return (
        
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
              
                <div className="ButtonContainer">
                    <button type="button" onClick={editarUsuario}>Editar</button>
                    <button type="button" onClick={cancelar}>Cancelar Registro</button>
                </div>
            </form>
        </div>
    </div>
    
    );
}

export default EditarReserva;
