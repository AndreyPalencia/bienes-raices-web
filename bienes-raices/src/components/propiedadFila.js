function propiedadFila({ casa }) {

    return (
        <tr key={casa.id}>
            <td>{casa.id}</td>
            <td>{casa.titulo}</td>
            <td>{
                <img src={'../assets/imagenes/' + casa.imagen} alt={casa.titulo} className="imagen-tabla" />
            }</td>
            <td>{casa.precio}</td>
            <td>
                <a href="" className="boton-amarillo-block">Actualizar</a>
                <input type="submit" className="boton-rojo-block" value="Eliminar" />
            </td>
        </tr>
    )
}

export default propiedadFila;