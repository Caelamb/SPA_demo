// Configuracion de nuestro servidor.
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mainRouter = require("./routes/mainRouter");

const app = express();

//middlewares

app.use(cors());//politicas de bloqueo de la seguridad de los navegadores

app.use(morgan("dev")); 
//cuando salga a produccion no lo necesitamos
//morgan: mostrarnos por consola las peticiones(GET) que hagamos

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });

app.use(express.json());// para detectar la estructura de JSON

app.use(mainRouter);//mandamos a llamar los routes

module.exports = app;

