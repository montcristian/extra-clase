import './ReservaUsuario.css';
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { connDatabase } from "../config/fireBaseConfig";
import { collection, doc, getDocs, deleteDoc } from "firebase/firestore";
import Swal from "sweetalert2";

const ReservaUsuario = () => {
    const navigate = useNavigate(); 
    const [usuarios, setUsuarios] = useState([]);

    async function getUsuarios() {
        let collectionReservas = collection(connDatabase, 'reservas');
        let resultado = await getDocs(collectionReservas);
        setUsuarios(resultado.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }

    useEffect(() => {
        getUsuarios();
    }, []);

    function eliminarUsuario(id) {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                confirmar(id);
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    }

    async function confirmar(id) {
        let deleteUser = doc(connDatabase, "reservas", id);
        await deleteDoc(deleteUser);
        getUsuarios();
    }

    const botonContenido = () => {
        navigate('/contenido');
    };

    return (
        <section className="panel Reservas">
        <div className="container">
            <div className="image-container">
                <img src="logo23.PNG" alt="logo" />
            </div>
            <section className="panel">
                <h2>Historial de reservas</h2>
                <main className="panel-contenido">
                    <table>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Email</th>
                                <th>Fecha</th>
                                <th>Hora</th>
                                <th>Equipo</th>
                                <th>Programa</th>
                                <th>Tiempo</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usuarios.map((element) => (
                                <tr key={element.id}>
                                    <td>{element.nombre}</td>
                                    <td>{element.apellido}</td>
                                    <td>{element.email}</td>
                                    <td>{element.fecha}</td>
                                    <td>{element.hora}</td>
                                    <td>{element.equipo}</td>
                                    <td>{element.programa}</td>
                                    <td>{element.tiempo}</td>
                                    <td className="ButtonContenido">
                                        <button onClick={() => eliminarUsuario(element.id)}>Eliminar</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <section className="ButtonContenido">
                        <div>
                            <input type="submit" value="home" onClick={botonContenido} />
                        </div>
                    </section>
                </main>
            </section>
        </div>
    </section>
);
};

export default ReservaUsuario;
