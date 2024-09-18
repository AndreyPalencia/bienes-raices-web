import Header from "../components/header";
import Footer from "../components/footer";
import FormularioContacto from '../components/fromularioContacto';
import imgendeContacto from '../assets/img/destacada3.jpg';

function contacto() {
    return (
        <>
            <Header valorEstado={false}></Header>
            <main className="contenedor seccion">
                <h1>Contacto</h1>
                <picture>
                    <img src={imgendeContacto}></img>
                </picture>
                <h2>Llene el formulario de Contacto</h2>
                <FormularioContacto/>
            </main>
            <Footer></Footer>
        </>
    )
}

export default contacto;
