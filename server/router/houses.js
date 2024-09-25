const express = require('express');
const houseRouter = express.Router()
const pool = require('../db/db');

//Para obtner un todas la casas
houseRouter.get('/', (req, res) => {
    const query = "SELECT * FROM propiedades";
    pool.query(query, (err, result) => {
        if (err) {
            console.log("Error en la peticion de información.", err);
            res.status(500).json({ error: "Error a solicitar los datos" });
            return;
        }
        res.status(200).json(result);
    });
});


houseRouter.get('/:id', (req, res) => {
    const id = req.params.id;
    if (!id || isNaN(id)) {
        res.status(400).json({ mensaje: "Id no puede ser null o invalido" });
        return;
    }
    const query = "SELECT * FROM propiedades WHERE id = ?";
    pool.query(query, [id], (err, result) => {
        if (err){
            console.log("Error en la peticion de información.", err);
            res.status(500).json({ error: "Error a solicitar los datos" });
            return;
        }
        if (result.length === 0){
            res.status(404).json({mensaje: "Propiedad solicitada no se encuentra"});
            return;
        }
        res.status(200).json(result);
    })
});




module.exports = houseRouter;

