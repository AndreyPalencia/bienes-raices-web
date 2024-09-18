function articulo({imagen,textoAlternativo,titulo,fecha,usuario,contendio}) {
    return (
        <article class="entrada-blog">
            <div class="imagen">
                <picture>
                    <img loading="lazy" src={imagen} alt={textoAlternativo} />
                </picture>
            </div>
            <div class="texto-entrada">
                <a href="entrada.html">
                    <h4>{titulo}</h4>
                    <p class="informacion-meta">Escrito el: <span>{fecha}</span> por: <span>{usuario}</span> </p>

                    <p>
                        {contendio}
                    </p>
                </a>
            </div>
        </article>
    )
}

export default articulo;
