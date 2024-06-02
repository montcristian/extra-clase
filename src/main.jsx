import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Login from './component/layout/auth/Login.jsx'
import RegistroUsuario from "./component/layout/auth/RegistroUsuario.jsx";
import Contenido from "./component/layout/pages/Contenido.jsx";
import Reserva from "./component/layout/auth/Reserva.jsx"
import ReservaUsuario from "./component/layout/users/ReservaUsuario.jsx"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

let router = createBrowserRouter([
    {
        path: "/Login",
        element: <Login />
    },
    {
        path: "/registroUsuario",
        element: <RegistroUsuario />

    },
    {
        path: "/contenido",
        element: <Contenido />

    },
    {
        path: "/reserva",
        element: <Reserva />

    },
    {
        path: "/reservaUsuario",
        element: <ReservaUsuario />

    },
    {
        path: "/",
        element: <App />
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);