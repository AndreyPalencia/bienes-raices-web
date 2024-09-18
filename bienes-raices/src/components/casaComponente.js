import banios from "../assets/img/icono_wc.svg";
import iconoEstacionamiento from "../assets/img/icono_estacionamiento.svg";
import iconoHabitaciones from "../assets/img/icono_dormitorio.svg";

function casa(props) {
    const rutaImg = require("../assets/img/" + props.imagen);
    return (
        <>
            <h1>{props.titulo}</h1>
            <picture>
                <img src={rutaImg} alt={"anuncion de la casa " + props.id} />
            </picture>
            <div className="resumen-propiedad">
                <h3>{props.titulo}</h3>
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
            <p>{props.descripcion}</p>
            </div>
        </>
    );
}

export default casa;
