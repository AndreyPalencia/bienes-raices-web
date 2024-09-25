import { useEffect, useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Casas from "../components/casasComponente";
import { api } from "../config/config";

function Anuncios() {
    // Llama a los hooks dentro del componente
    const [casas, setCasas] = useState([]);

    async function fetchCasas() {
        try {
            const res = await api('/casas');
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
            <main className="contenedor seccion ">
                <h1>Casas y Departamentos a la venta</h1>
                <div className="contenedor-anuncios">
                    {casas.map((casaRow) => (
                        <Casas
                            key={casaRow.id}
                            imagen={casaRow.imagen}
                            id={casaRow.id}
                            titulo={casaRow.titulo}
                            descripcion={casaRow.descripcion}
                            precio={casaRow.precio}
                            wc={casaRow.wc}
                            estacionamiento={casaRow.estacionamiento}
                            habitaciones={casaRow.habitaciones}
                        />
                    ))}
                </div>
            </main>
            <Footer></Footer>
        </>
    );
}

export default Anuncios;
