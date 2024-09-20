<main className="contenedor seccion">
    <h1>Crear</h1>
    <a href="/admin" className="boton boton-verde">Volver</a>
    <form className="formulario" method="POST" action="/admin/propiedades/crear.php" enctype="multipart/form-data">
        <fieldset>
            <legend>Información General</legend>
            <label for="titulo">Titulo:</label>
            <input type="text" id="titulo" name="titulo" placeholder="Titulo Propiedad" value="" />

            <label for="precio">Precio:</label>
            <input type="number" id="precio" name="precio" placeholder="Precio Propiedad" value="" />

            <label for="imagen">Imagen:</label>
            <input type="file" id="imagen" accept="image/jpeg, image/png" name="imagen" />

            <label for="descripcion">Descripción:</label>
            <textarea id="descripcion" name="descripcion"></textarea>

        </fieldset>

        <fieldset>
            <legend>Información Propiedad</legend>

            <label for="habitaciones">Habitaciones:</label>
            <input
                type="number"
                id="habitaciones"
                name="habitaciones"
                placeholder="Ej: 3"
                min="1"
                max="9"
                value="" />

            <label for="wc">Baños:</label>
            <input type="number" id="wc" name="wc" placeholder="Ej: 3" min="1" max="9" value="" />

            <label for="estacionamiento">Estacionamiento:</label>
            <input type="number" id="estacionamiento" name="estacionamiento" placeholder="Ej: 3" min="1" max="9" value="" />

        </fieldset>

        <fieldset>
            <legend>Vendedor</legend>

            <select name="vendedor">
                <option value="">-- Seleccione --</option>
                <option value="1"> Juan De la torre </option>
                <option value="2"> KAREN ACT Perez </option>
            </select>
        </fieldset>

        <input type="submit" value="Crear Propiedad" className="boton boton-verde" />
    </form>

</main>