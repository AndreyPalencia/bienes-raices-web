import { api } from "../config/config";



function propiedadFila({ casa }) {
    const handleDelete = async (e) => {
        try {
            const res = await api.delete(`/casa/admin/delete/${casa.id}`);
            alert(JSON.stringify(res.data.mensaje));
        } catch (err) {
            console.log(err);
        }
    }
    const rutaImg = `${process.env.REACT_APP_URL_IMAGENES}//${casa.imagen}`;
    const direcionRutaUpdate = "/admin/modificar-casa/" + casa.id;
    return (
        <tr key={casa.id}>
            <td>{casa.id}</td>
            <td>{casa.titulo}</td>
            <td>{
                <img src={rutaImg} alt={casa.titulo} className="imagen-tabla" />
            }</td>
            <td>{casa.precio}</td>
            <td>
                <form onSubmit={handleDelete}>
                <a href={direcionRutaUpdate} className="boton-amarillo-block">Actualizar</a>
                <button value={casa.id} className="boton-rojo-block">Eliminar</button>
                </form>
            </td>
        </tr>
    )
}

export default propiedadFila;