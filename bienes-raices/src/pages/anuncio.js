import Header from "../components/header";
import Footer from "../components/footer";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import CasaComponente from "../components/casaComponente"; // Asegúrate que es el componente correcto
import { api } from "../config/config";

function Anuncio() {
    const [casa, setCasa] = useState({});
    const { id } = useParams();

    async function fetchCasa() {
        try {
            const res = await api(`/casas/${id}`);
            setCasa(res.data[0]);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchCasa();
    }, [id]);

    return (
        <>
            <Header valorEstado={false}></Header>
            <main className="contenedor seccion">
                <h1>Detalles del Anuncio</h1>
                {casa && <CasaComponente casa={casa} />}
            </main>
            <Footer></Footer>
        </>
    );
}

export default Anuncio;
