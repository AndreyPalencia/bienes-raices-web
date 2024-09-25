const express = require('express');
//Para manero el manejo de las imganes en directoriso
const multer = require('multer');
const userAdmin = express.Router()
const pool = require('../db/db');

//Para el manejo de las imagenes de ruta de las imagenes
const path = require('path');
const fs = require('fs')

//Importar la configuracion
const storage = require('../urlImagenes');
//Para agregar la configuracion a multer
const imagenes = multer({ storage });

//Importamos el archivo para autenficacion de las peticiones
const verificacionToken = require('../auth/autorizacion')

//Para obtner un todas la casas
userAdmin.post('/create',verificacionToken, imagenes.single('imagen'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }

    // Obtener datos del formulario
    const { titulo, precio, descripcion, habitaciones, wc, estacionamiento, vendedorId } = req.body;

    // Crear un objeto para almacenar la propiedad
    const propiedad = {
        imagen: req.file.filename, // Nombre del archivo de imagen guardado
        creado: new Date().toISOString().split('T')[0], // Fecha de creación
    };

    const query = "INSERT INTO propiedades(id,titulo,precio,imagen,descripcion,habitaciones,wc,estacionamiento,vendedorId,creado) VALUES(NULL,?,?,?,?,?,?,?,?,?)";
    pool.query(query, [titulo, precio, propiedad.imagen, descripcion, habitaciones, wc, estacionamiento, vendedorId, propiedad.creado], (err, result) => {
        if (err) {
            console.log("Error en la creacion de la propiedad.", err);
            res.status(500).json({ error: "Error al crear la propiedad" });
            return;
        }
        res.status(200).json({ mensaje: "Propiedad creada con Exito." });
    });
});

userAdmin.put('/update/:id',verificacionToken, imagenes.single('imagen'),(req, res) => {
    
    const id = req.params.id;
    
    //Actualizacion en la base de datos
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }

    if (!id || isNaN(id)) {
        res.status(400).json({ mensaje: "Id no puede ser null o invalido" });
        return;
    }

    const querySelect = "SELECT imagen FROM propiedades WHERE id  = ?"
    pool.query(querySelect, [id], (err,result) => {
        if (err || result.length === 0 ){
            console.log("Error al encontrar la propiedad.", err);
            return res.status(404).json({error:"Propiedades no encontrada"});
        }
        const oldImagen = result[0].imagen;

        if (oldImagen){
            const imagePath = path.join(__dirname, '/imagenes/',oldImagen);
            fs.unlink(imagePath, (err) => {
                if(err) {
                    console.log("Error al eliminar el archivo antiguo: ", err)
                }
            });
        }

    });

    const { titulo, precio, descripcion, habitaciones, wc, estacionamiento, vendedorId } = req.body;

    const nowPropiedades  = {
        imagen: req.file.filename, 
        creado: new Date().toISOString().split('T')[0], 
    }

    const query = "UPDATE propiedades SET titulo = ?,precio = ?,imagen = ?,descripcion = ?,habitaciones = ?,wc = ?,estacionamiento = ?,vendedorId= ?,creado = ? WHERE id = ?";
    pool.query(query, [titulo, precio, nowPropiedades.imagen, descripcion, habitaciones, wc, estacionamiento, vendedorId, nowPropiedades.creado, id], (err, result) => {
        if (err) {
            console.log("Error en la peticion actualizacion de la propiedad solicitada.", err);
            res.status(500).json({ error: "Error actualizar los datos" });
            return;
        }
        if (result.affectedRows === 0) {
            res.status(404).json({ mensaje: "Propiedad solicitada no encontrada" });
            return;
        }
        res.status(200).json({ mensaje: "Propiedad actualizada con Exito." });
    });

});

userAdmin.delete('/delete/:id',verificacionToken, (req, res) => {
    const id = req.params.id;
    if (!id || isNaN(id)) {
        res.status(400).json({ mensaje: "Id no puede ser null o invalido" });
        return;
    }
    const query = "DELETE FROM propiedades WHERE id = ?";
    pool.query(query, [id], (err, result) => {
        if (err) {
            console.log("Error en la eliminacion de la propiedad.");
            res.status(500).json({ error: "Error al eliminar la propiedad" });
            return;
        }
        if (result.affectedRows === 0) {
            res.status(404).json({ mensaje: "Propiedad solicitada no encontrada" });
            return;
        }
        res.status(200).json({ mensaje: "Se elimino la propiedad de manera exitosa." });
    });
});


module.exports = userAdmin;