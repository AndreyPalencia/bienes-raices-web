const express = require('express');
const userAdmin = express.Router()
const pool = require('../db');

//Para obtner un todas la casas
userAdmin.post('/create', (req, res) => {
    const {titulo,precio,imagen,descripcion,habitaciones,wc,estacionamiento,vendedorId,creado} = req.body;
    const query = "INSERT INTO propiedades(id,titulo,precio,imagen,descripcion,habitaciones,wc,estacionamiento,vendedorId,creado) VALUES(NULL,?,?,?,?,?,?,?,?,?)";
    pool.query(query,[titulo,precio,imagen,descripcion,habitaciones,wc,estacionamiento,vendedorId,creado], (err, result) => {
        if (err) {
            console.log("Error en la creacion de la propiedad.", err);
            res.status(500).json({ error: "Error al crear la propiedad" });
            return;
        }
        res.status(200).json({ mensaje: "Propiedad creada con Exito."});
    });
});

userAdmin.put('/update/:id', (req,res) => {
    const id = req.params.id;
    if (!id || isNaN(id)) {
        res.status(400).json({ mensaje: "Id no puede ser null o invalido" });
        return;
    }
    const {titulo,precio,imagen,descripcion,habitaciones,wc,estacionamiento,vendedorId,creado} = req.body;
    const query = "UPDATE propiedades SET titulo = ?,precio = ?,imagen = ?,descripcion = ?,habitaciones = ?,wc = ?,estacionamiento = ?,vendedorId= ?,creado = ? WHERE id = ?";
    pool.query(query,[titulo,precio,imagen,descripcion,habitaciones,wc,estacionamiento,vendedorId,creado,id], (err, result) => {
        if (err) {
            console.log("Error en la peticion actualizacion de la propiedad solicitada.", err);
            res.status(500).json({ error: "Error actualizar los datos" });
            return;
        }
        if (result.affectedRows === 0){
            res.status(404).json({mensaje: "Propiedad solicitada no encontrada"});
            return;
        }
        res.status(200).json({ mensaje: "Propiedad actualizada con Exito."});
    });
});

userAdmin.delete('/delete/:id', (req,res) => {
    const id = req.params.id;
    if (!id || isNaN(id)) {
        res.status(400).json({ mensaje: "Id no puede ser null o invalido" });
        return;
    }
    const query = "DELETE FROM propiedades WHERE id = ?";
    pool.query(query,[id], (err,result) => {
        if (err) {
            console.log("Error en la eliminacion de la propiedad.");
            res.status(500).json({error: "Error al eliminar la propiedad"});
            return;
        }
        if (result.affectedRows === 0){
            res.status(404).json({mensaje: "Propiedad solicitada no encontrada"});
            return;
        }
        res.status(200).json({mensaje: "Se elimino la propiedad de manera exitosa."});
    });
});


module.exports = userAdmin;