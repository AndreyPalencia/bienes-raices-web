import axios from "axios";

function propiedadFila({ casa }) {
    const rutaImg = require("../assets/imagenes/" + casa.imagen);

    const handleDelete = async (e) => {
        e.preventDefault();
        try{
            const res = await axios.delete(`http://localhost:3000/casa/admin/delete/${e.target.value}`);
            console.log(res.data)
        }catch(err){
            console.log(err);
        }
    }
    return (
        <tr key={casa.id}>
            <td>{casa.id}</td>
            <td>{casa.titulo}</td>
            <td>{
                <img src={rutaImg} alt={casa.titulo} className="imagen-tabla" />
            }</td>
            <td>{casa.precio}</td>
            <td>
                <a href="" className="boton-amarillo-block">Actualizar</a>
                <button value={casa.id} className="boton-rojo-block" onClick={handleDelete}>Eliminar</button>
            </td>
        </tr>
    )
}

export default propiedadFila;