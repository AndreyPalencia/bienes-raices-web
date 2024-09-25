import banios from "../assets/img/icono_wc.svg";
import iconoEstacionamiento from "../assets/img/icono_estacionamiento.svg";
import iconoHabitaciones from "../assets/img/icono_dormitorio.svg";

function casas(props) {
    const rutaImg = `${process.env.REACT_APP_URL_IMAGENES}/${props.imagen}`;
    const direcionAnuncion = "/anuncio/" + props.id;
    return (
        <div className="anuncio">
            <picture>
                <img src={rutaImg} alt={"anuncion de la casa " + props.id} />
            </picture>
            <div className="contenido-anuncio">
                <h3>{props.titulo}</h3>
                <p>{props.descripcion}</p>
                <p className="precio">{props.precio}</p>
                <ul className="iconos-caracteristicas">
                    <li>
                        <img loading="lazy" className="icono" src={banios} alt="icono wc" />
                        <p>{props.wc}</p>
                    </li>
                    <li>
                        <img
                            loading="lazy"
                            className="icono"
                            src={iconoEstacionamiento}
                            alt="icono estacionamiento"
                        />
                        <p>{props.estacionamiento}</p>
                    </li>
                    <li>
                        <img
                            loading="lazy"
                            className="icono"
                            src={iconoHabitaciones}
                            alt="icono habitaciones"
                        />
                        <p>{props.habitaciones}</p>
                    </li>
                </ul>
                <a href={direcionAnuncion} className="boton-amarillo-block">
                    Ver Propiedad
                </a>
            </div>
        </div>
    );
}

export default casas;
