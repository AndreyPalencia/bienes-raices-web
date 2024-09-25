import axios from "axios";

const handleDelete = async (e) => {
    try {
        const token = localStorage.getItem('token');

        const res = await axios.delete(`http://localhost:3000/casa/admin/delete/${e.target.value}`, {
            headers : {
                Authorization : token
            }
        });
        console.log(res.data);
        alert(JSON.stringify(res.data.mensaje))
    } catch (err) {
        console.log(err);
    }
}


function propiedadFila({ casa }) {
    const rutaImg = "http://localhost:3000/imagenes/" +casa.imagen;
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
                <form>
                <a href={direcionRutaUpdate} className="boton-amarillo-block">Actualizar</a>
                <button  value={casa.id} className="boton-rojo-block" onClick={handleDelete}>Eliminar</button>
                </form>
            </td>
        </tr>
    )
}

export default propiedadFila;