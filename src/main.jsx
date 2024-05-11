import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Login from './component/layout/Login.jsx';
import RegistroUsuario from './component/layout/RegistroUsuario.jsx';
import Contenido from './component/layout/Contenido.jsx';
import Reserva from './component/layout/Reserva.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

let router = createBrowserRouter([
    {
        path: "/Login",
        element:  <Login/>
    },
    {
        path: "/registroUsuario",
        element:  <RegistroUsuario/>

    },
    {
        path: "/contenido",
        element:  <Contenido/>

    },
    {
        path: "/reserva",
        element:  <Reserva/>

    },
    {
        path: "/",
        element: <App/>
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);