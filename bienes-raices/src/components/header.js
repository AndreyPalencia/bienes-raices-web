import logo from '../assets/img/logo.svg';
import barras from '../assets/img/barras.svg';
import modoLuna from '../assets/img/dark-mode.svg';

function header() {
    return (
        <header className="header">
            <div className="contenedor contenido-header">
                <div className="barra">
                    <a href="/">
                        <img src={logo} alt="Logotipo de Bienes Raices" />
                    </a>
                    <div class="mobile-menu">
                        <img src={barras} alt="icono menu responsive" />
                    </div>
                    <div className="derecha">
                        <img className="dark-mode-boton" src={modoLuna}  alt="modoLuna"/>
                        <nav className="navegacion">
                            <a href="">Nosotros</a>
                            <a href="">Anuncios</a>
                            <a href="">Contacto</a>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default header;