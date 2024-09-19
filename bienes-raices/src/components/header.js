import logo from '../assets/img/logo.svg';
import barras from '../assets/img/barras.svg';
import modoLuna from '../assets/img/dark-mode.svg';



function header({valorEstado,  children}) {
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
                        </nav>
                    </div>
                </div>
                { children}
            </div>
        </header>
    )
}

export default header;