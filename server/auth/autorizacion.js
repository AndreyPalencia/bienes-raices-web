const jwt = require('jsonwebtoken');

require('dotenv').config();

const Skey = process.env.SECRET_KEY;

const verificacionToken = (res,req,next) => {
    const token = req.header('Authorization');

    if (!token) {
        res.status(401).json({ mensaje: "Acceso denegado. No hay token." });
    }

    try{
        const verificado = jwt.verify(token, Skey );
        req.usuario = verificado;
        next();
    }catch(err){
        res.status(400).json({ mesaje: 'Token Invalido.' });
    }
}

module.exports = verificacionToken;