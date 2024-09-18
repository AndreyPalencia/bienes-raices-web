import { Children } from "react";

function infoNosotros(props) {
    const nombre = require('../assets/img/'+props.direccion);
    return (
        <div className="icono">
            <img loading="lazy" src={nombre} alt={props.textoAlterno}/>
            <h3>{props.titulo}</h3>
            <p>{props.contenido}</p>
        </div>
    )
}

export default infoNosotros;