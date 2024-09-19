import axios from "axios";
import React, { useState } from 'react';
import Footer from '../components/footer';
import Header from '../components/header';

function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [responseMessage, setResponseMessage] = useState("");

    const handleChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        });
    };

    const submit = async (e) => {
        e.preventDefault();
        try{

            const response = await axios.post("http://localhost:3000/api/login", formData);
            setResponseMessage(response.data.message);
        }catch(error){
            console.error("Error al enviar el formulario", error);
            setResponseMessage("Error al enviar el formulario");
        }
    };
    return (
        <>
            <Header valorEstado={false}></Header>
            <main className="contenedor seccion contenido-centrado">
                <h1>Iniciar Sesión</h1>


                <form method="POST" className="formulario" novalidate onSubmit={submit}>
                    <fieldset>
                        <legend>Email y Password</legend>

                        <label for="email">E-mail</label>
                        <input type="email" name="email" placeholder="Tu Email" id="email" value={formData.email} onChange={handleChange}required />

                        <label for="password">Password</label>
                        <input type="password" name="password" placeholder="Tu Password" id="password"  value={formData.password} onChange={handleChange}required />
                    </fieldset>

                    <input type="submit" value="Iniciar Sesión" className="boton boton-verde" />
                </form>
            </main>
            {responseMessage && <p>{responseMessage}</p>}
            <Footer></Footer>
        </>

    )
}
export default Login;