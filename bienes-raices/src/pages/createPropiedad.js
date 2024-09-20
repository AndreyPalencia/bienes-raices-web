import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

function CreatePropiedad() {
    const [formData, setFormData] = useState({
        titulo: "",
        precio: "",
        imagen: null, 
        descripcion: "",
        habitaciones: "",
        wc: "",
        estacionamiento: "",
        vendedorId: "",
        creado: ""
    });

    const navigate = useNavigate();


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0]; 
        if (file) {
            setFormData({
                ...formData,
                imagen: file,
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Crear un nuevo FormData
        const data = new FormData();
        
        // Añadir todos los datos del formulario a FormData
        Object.keys(formData).forEach(key => {
            data.append(key, formData[key]);
        });

        try {
            // Hacer la llamada a la API
            const res = await axios.post('http://localhost:3000/casa/admin/create', data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(res.data);
            navigate('/admin/casas');
        } catch (err) {
            console.log(err);
            alert("Ha ocurrido un error durante la creación de la propiedad");
        }
    };
    
    return (
        <>
        <Header valorEstado={false}></Header>
            <main className="contenedor seccion">
                <h1>Crear Propiedad</h1>
                <a href="/admin/casas" className="boton boton-verde">Volver</a>
                <form className="formulario" onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>Información General</legend>
                        
                        <label htmlFor="titulo">Titulo:</label>
                        <input 
                            type="text" 
                            id="titulo" 
                            name="titulo" 
                            placeholder="Titulo Propiedad" 
                            value={formData.titulo} 
                            onChange={handleChange}
                            required 
                        />

                        <label htmlFor="precio">Precio:</label>
                        <input 
                            type="number" 
                            id="precio" 
                            name="precio" 
                            placeholder="Precio Propiedad" 
                            value={formData.precio} 
                            onChange={handleChange} 
                            required
                        />

                        <label htmlFor="imagen">Imagen:</label>
                        <input 
                            type="file" 
                            id="imagen" 
                            accept="image/jpeg, image/png" 
                            name="imagen" 
                            onChange={handleFileChange} 
                            required
                        />
                        <p>Archivo seleccionado: {formData.imagen ? formData.imagen.name : 'Ninguno'}</p> 
                        <label htmlFor="descripcion">Descripción:</label>
                        <textarea 
                            id="descripcion" 
                            name="descripcion" 
                            value={formData.descripcion}
                            onChange={handleChange}
                        ></textarea>

                    </fieldset>

                    <fieldset>
                        <legend>Información Propiedad</legend>

                        <label htmlFor="habitaciones">Habitaciones:</label>
                        <input
                            type="number"
                            id="habitaciones"
                            name="habitaciones"
                            placeholder="Ej: 3"
                            min="1"
                            max="9"
                            value={formData.habitaciones} 
                            onChange={handleChange} 
                            required
                        />

                        <label htmlFor="wc">Baños:</label>
                        <input 
                            type="number" 
                            id="wc" 
                            name="wc" 
                            placeholder="Ej: 3" 
                            min="1" 
                            max="9" 
                            value={formData.wc}  
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="estacionamiento">Estacionamiento:</label>
                        <input 
                            type="number" 
                            id="estacionamiento" 
                            name="estacionamiento" 
                            placeholder="Ej: 3" 
                            min="1" 
                            max="9" 
                            value={formData.estacionamiento}  
                            onChange={handleChange}
                            required
                        />

                    </fieldset>

                    <fieldset>
                        <legend>Vendedor</legend>

                        <select 
                            name="vendedorId" 
                            value={formData.vendedorId} 
                            onChange={handleChange} 
                        >
                            <option value="">-- Seleccione --</option>
                            <option value="1">Juan De la Torre</option>
                            <option value="2">Karen ACT Perez</option>
                        </select>
                    </fieldset>

                    <input type="submit"  value="Crear Propiedad" className="boton boton-verde" />
                </form>
            </main>
            <Footer></Footer>
        </>
    );
}

export default CreatePropiedad;
