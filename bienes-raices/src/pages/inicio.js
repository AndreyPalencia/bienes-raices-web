import Header from '../components/header';
import Footer from '../components/footer';
import InfoNosotros from '../components/infoNosotros';
import Casas from '../components/casasComponente';
import Articulo from'../components/articulo';
import blog1 from '../assets/img/blog1.jpg';
import blog2 from '../assets/img/blog2.jpg';

function inicio() {
    const lore =
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus sint unde pariatur voluptates eaque? Ipsam incidunt quisquam ea animi quas odit consequuntur, saepe nisi in voluptas enim non debitis hic.";
    return (
        <>
            <Header valorEstado={true}>
                <h1>Venta de Casas y Departamentos Exclusivos de Lujo</h1>
            </Header>
            <main className="contenedor seccion ">
                <h1>Más Sobre Nosotros</h1>
                <div className="iconos-nosotros">
                    <InfoNosotros
                        titulo="Seguridad"
                        direccion={"icono1.svg"}
                        textoAlterno="Icono seguridad"
                        contenido={lore}
                    />
                    <InfoNosotros
                        titulo="Precio"
                        direccion={"icono2.svg"}
                        textoAlterno="Icono Precio"
                        contenido={lore}
                    />
                    <InfoNosotros
                        titulo="Tiempo"
                        direccion={"icono3.svg"}
                        textoAlterno="Icono Tiempo"
                        contenido={lore}
                    />
                </div>
            </main>
            <section className="seccion contenedor">
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
                <div class="alinear-derecha">
                    <a href="anuncios.html" class="boton-verde">
                        Ver Todas
                    </a>
                </div>
            </section>
            <section class="imagen-contacto">
                <h2>Encuentra la casa de tus sueños</h2>
                <p>
                    Llena el formulario de contacto y un asesor se pondrá en contacto
                    contigo a la brevedad
                </p>
                <a href="contacto" class="boton-amarillo">
                    Contactános
                </a>
            </section>
            <div class="contenedor seccion seccion-inferior">
                <section class="blog">
                    <h3>Nuestro Blog</h3>
                    <Articulo
                        imagen={blog1}
                        textoAlternativo = "Texto Entrada Blog"
                        titulo="Terraza en el techo de tu casa"
                        fecha="20/10/2021"
                        usuario="Admin"
                        contendio="Consejos para construir una terraza en el techo de tu casa con los mejores materiales y ahorrando dinero"
                    ></Articulo>
                    <Articulo
                        imagen= {blog2}
                        textoAlternativo = "Texto Entrada Blog"
                        titulo="Guía para la decoración de tu hogar"
                        fecha="20/10/2021"
                        usuario="Admin"
                        contendio="Maximiza el espacio en tu hogar con esta guia, aprende a combinar muebles y colores para darle vida a tu espacio"
                    ></Articulo>
                </section>
                <section class="testimoniales">
                    <h3>Testimoniales</h3>
                    <div class="testimonial">
                        <blockquote>
                            El personal se comportó de una excelente forma, muy buena atención
                            y la casa que me ofrecieron cumple con todas mis expectativas.
                        </blockquote>
                        <p>- Pedro Pablo Jaramillo</p>
                    </div>
                </section>
            </div>
            <Footer></Footer>
        </>
    );
}

export default inicio;
