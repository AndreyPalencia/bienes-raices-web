import Casas from "../components/casasComponente";
import Footer from "../components/footer";
import Header from "../components/header";

function anunucios() {
    return (
        <>
            <Header valorEstado={false}></Header>
            <main className="contenedor seccion ">
                <h1>Casas y Departamentos a la venta</h1>
                <div className="contenedor-anuncios">
                    <Casas
                        imagen="anuncio2.jpg"
                        id="1"
                        titulo="CASA"
                        descripcion="Casa casa casas"
                        precio="24155"
                        wc="2"
                        estacionamiento="4"
                        habitaciones="4"
                    ></Casas>
                </div>
            </main>
            <Footer></Footer>
        </>
    );
}

export default anunucios;
