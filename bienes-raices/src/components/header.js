import logo from '../assets/img/logo.svg';
import barras from '../assets/img/barras.svg';
import modoLuna from '../assets/img/dark-mode.svg';
import { useEffect, useState } from "react";


function Header({valorEstado,children}) {
    const [isLoggedIn, setIsLoggedIn] = useState(null);
    
    useEffect( () => {
        const token = localStorage.getItem('token');
        setIsLoggedIn(!!token)
    }, []);


    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false)
    }
    return (
        <header className={valorEstado ? "header inicio" : "header"}>
            <div className="contenedor contenido-header">
                <div className="barra">
                    <a href="/">
                        <img src={logo} alt="Logotipo de Bienes Raices" />
                    </a>
                    <div className="mobile-menu">
                        <img src={barras} alt="icono menu responsive" />
                    </div>
                    <div className="derecha">
                        <img className="dark-mode-boton" src={modoLuna} alt="modoLuna" />
                        <nav className="navegacion">
                            <a href="/nosotros">Nosotros</a>
                            <a href="/anuncios">Anuncios</a>
                            <a href="/contacto">Contacto</a>
                            {
                                isLoggedIn ? (
                                    <a  href='/login' onClick={handleLogout}>Cerrar Sesión</a>
                                ) : (
                                    <a href='/login'>Iniciar Sesión</a>
                                )
                            }
                        </nav>
                    </div>
                </div>
                { children}
            </div>
        </header>
    )
}

export default Header;