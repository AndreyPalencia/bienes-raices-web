import banios from "../assets/img/icono_wc.svg";
import iconoEstacionamiento from "../assets/img/icono_estacionamiento.svg";
import iconoHabitaciones from "../assets/img/icono_dormitorio.svg";

function CasaComponente({ casa }) {
    const { id, titulo, precio, wc, estacionamiento, habitaciones, descripcion, imagen } = casa;
    const rutaImg = imagen ? `http://localhost:3000/imagenes/${imagen}` : '';

    return (
        <>
            <h1>{titulo}</h1>
            {imagen && (
                <picture>
                    <img src={rutaImg} alt={`anuncio de la casa ${id}`} />
                </picture>
            )}
            <div className="resumen-propiedad">
                <h3>{titulo}</h3>
                <p className="precio">{precio}</p>
                <ul className="iconos-caracteristicas">
                    <li>
                        <img loading="lazy" className="icono" src={banios} alt="icono wc" />
                        <p>{wc || "N/A"}</p>
                    </li>
                    <li>
                        <img
                            loading="lazy"
                            className="icono"
                            src={iconoEstacionamiento}
                            alt="icono estacionamiento"
                        />
                        <p>{estacionamiento || "N/A"}</p>
                    </li>
                    <li>
                        <img
                            loading="lazy"
                            className="icono"
                            src={iconoHabitaciones}
                            alt="icono habitaciones"
                        />
                        <p>{habitaciones || "N/A"}</p>
                    </li>
                </ul>
                <p>{descripcion}</p>
            </div>
        </>
    );
}

export default CasaComponente;
