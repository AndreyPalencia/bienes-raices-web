const express = require('express');
const houseRouter = express.Router()
const pool = require('../db');

//Para obtner un todas la casas
houseRouter.get('/', (req, res) => {
    const query = "SELECT * FROM propiedades";
    pool.query(query, (err, result) => {
        if (err) {
            console.log("Error en la peticion de información.", err);
            res.status(500).json({ error: "Error a solicitar los datos" });
            return;
        }
        res.status(200).json({mensaje: "Datos enviados.",datos:result});
    });
});




module.exports = houseRouter;

