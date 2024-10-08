import React, { useState } from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import {  useNavigate } from "react-router-dom";
import { api } from "../config/config";

function Login() {
    const navegate = useNavigate();

    const [formData, setFormData] = useState({
        password: "",
        email: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const submit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post("/login/autorizacionLogin",formData);

            if (response.data.token){
                localStorage.setItem('token', response.data.token);
                navegate('/admin/casas');
            }else{
                alert('Error: ' + response.data.mensaje );
            }
        } catch (error) {
            console.error("Error al enviar el formulario", error);
            alert("Error al enviar el formulario");
        }
    };

    return (
        <>
            <Header valorEstado={false} />
            <main className="contenedor seccion contenido-centrado">
                <h1>Iniciar Sesión</h1>

                <form  className="formulario"  onSubmit={submit}>
                    <fieldset>
                        <legend>Email y Password</legend>

                        <label htmlFor="email">E-mail</label>
                        <input type="email" name="email" placeholder="Tu Email" id="email" value={formData.email} onChange={handleChange} required />

                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="Tu Password" id="password" value={formData.password} onChange={handleChange} required />
                    </fieldset>

                    <input type="submit" value="Iniciar Sesión" className="boton boton-verde" />
                </form>
            </main>
            <Footer />
        </>
    );
}

export default Login;
