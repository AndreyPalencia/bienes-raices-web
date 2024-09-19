import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/header";
import Footer from "../components/footer";
import PropiedadFila from "../components/propiedadFila";

function AdminPropiedades() {
    const [casas, setCasas] = useState([]);
    async function fetchCasas() {
        try {
            const res = await axios.get("http://localhost:3000/casas");
            setCasas(res.data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchCasas();
    }, []);


    return (
        <>
            <Header valorEstado={false}></Header>
            <main className="contenedor seccion">
                <h1>Administrador de Bienes Raices</h1>

                <a href="/inicio" className="boton boton-verde">
                    Nueva Propiedad
                </a>

                <table className="propiedades">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Titulo</th>
                            <th>Imagen</th>
                            <th>Precio</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>

                    <tbody>
                        {casas.map((casaRow) => (
                            <PropiedadFila key={casaRow.id} casa={casaRow}></PropiedadFila>
                        ))}
                    </tbody>
                </table>
            </main>
            <Footer></Footer>
        </>
    );
}

export default AdminPropiedades;
