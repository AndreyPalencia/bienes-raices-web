const express = require('express');
const autorizacion = express.Router();
//Parea realizar creacion de un token de verificacion para proteger las rutas
const jwt = require('jsonwebtoken');
const pool = require('../db/db');
//Para comporara la constraseñas esto depende del algorimo que se use para encriytar la contraseña
const bycrypt = require('bcryptjs');
const userAdmin = require('../router/admin');


//Cargar la variabre de entornoto por medio de dontenv para acceder al secret key para la configuracion JWT para la clave privada de descriptacion 
require('dotenv').config();

const SKey = process.env.SECRET_KEY;


autorizacion.post('/autorizacionLogin', async (req,res) => {
    const {password, email} = req.body;
    const query = "SELECT * FROM usuarios WHERE password = ? and email = ?"
    pool.query(query,[password, email], async (err, result) => {
        //Realiza la validacion que si envio un error o si el resultado es vacio si no lo encontro.
        if (err || result.length === 0) {
            console.log("Error a realizar la consulta del usuario.");
            res.status(500).json({ error: "Usuario o contraseña incorrectos" });
            return;
        }
        //Estrago el resultado de la repuesta
        const usuarioResult = result[0];
        
        //Valido si la contraseña ingresado y en la base de datos conside.
        const esPasswordCorrecta = await bycrypt.compare(password, usuarioResult.password);
        
        if (esPasswordCorrecta) {
            res.status(400).json({error : "Usuario o contraseña incorrectos"});
        }

        //Si las credenciales son correctas, generamos el token apartir de los datos
        //Que informacion de se almacena 
        //Clava secreta para fimar el token 
        //Definimos la duracion del token 
        const token = jwt.sign(
            {
                id:usuarioResult.id, 
                email : usuarioResult.email
            }, SKey, {
                expiresIn : '1h'
            }
        );
    
        res.status(200).json({mensaje: "Usuario autorizado", token});
        return;
    });
});

//NOTA: En este caso como la consulta pregunta por password y email puede parecer inicesario lo que es validar la contraseña pero en un proyecto real se consultaria por un dato y por el id y no por validar directamente a ambos las campos.

module.exports = autorizacion;