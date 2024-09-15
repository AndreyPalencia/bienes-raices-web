const express = require('express');
//Importar los router
const housesRouter = require('./router/houses');
const userAdmin = require('./router/admin');

const app = express();
const port = 3000;

//Consfiguracion del servidor
app.use(express.json())



app.use('/casas', housesRouter);
app.use('/casa/admin', userAdmin);


app.listen(port, () => {
    console.log(`Ejecutando el servidor ${port}`);
});