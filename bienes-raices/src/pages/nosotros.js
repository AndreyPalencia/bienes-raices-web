import Header from '../components/header';
import Footer from '../components/footer';
import imgNosotros from '../assets/img/nosotros.jpg';
import InfoNosotros from '../components/infoNosotros';


function nosotros() {
    const lore = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus sint unde pariatur voluptates eaque? Ipsam incidunt quisquam ea animi quas odit consequuntur, saepe nisi in voluptas enim non debitis hic.";
    return (
        <>
            <Header valorEstado={false}></Header>
            <main className="contenedor seccion">
                <section className="contenedor seccion">
                    <h1>Conoce sobre Nosotros</h1>
                    <div className="contenido-nosotros">
                        <div className="imagen">
                            <picture>
                                <img loading="lazy" src={imgNosotros} alt="Sobre Nosotros" />
                            </picture>
                        </div>
                        <div className="texto-nosotros">
                            <blockquote>25 Años de experiencia</blockquote>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quos, animi necessitatibus et velit esse odit omnis doloribus culpa temporibus, molestias cum repellat reiciendis, est voluptate. Vitae itaque nemo excepturi!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ex molestiae inventore aut est laborum numquam alias corrupti. Odio accusamus at enim sapiente qui consequatur ipsam veniam quidem porro ducimus!</p>
                        </div>
                    </div>
                </section>
                <section className='contenedor seccion'>
                    <h1>Más Sobre Nosotros</h1>
                    <div className='iconos-nosotros'>
                        <InfoNosotros titulo='Seguridad' direccion={'icono1.svg'} textoAlterno='Icono seguridad' contenido={lore} />
                        <InfoNosotros titulo='Precio' direccion={'icono2.svg'} textoAlterno='Icono Precio' contenido={lore} />
                        <InfoNosotros titulo='Tiempo' direccion={'icono3.svg'} textoAlterno='Icono Tiempo' contenido={lore} />
                    </div>
                </section>
            </main>
            <Footer></Footer>
        </>
    )
}

export default nosotros;