const express = require('express');
const cors = require('cors')
//Para el manejo de las imagenes de ruta de las imagenes
const path = require('path');

//Importar los router
const housesRouter = require('./router/houses');
const userAdmin = require('./router/admin');

const app = express();
const port = 3000;

//Consfiguracion del servidor
app.use(express.json())
app.use(cors());

app.use('/imagenes', express.static(path.join(__dirname, 'imagenes')));

app.use('/casas', housesRouter);
app.use('/casa/admin', userAdmin);


app.listen(port, () => {
    console.log(`Ejecutando el servidor ${port}`);
});