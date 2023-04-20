// Configuracion de nuestro servidor.
const express = require("express");
const morgan = require("morgan");
const mainRouter = require("./routes/mainRouter");

const app = express();

//middlewares

app.use(morgan("dev")); 
//cuando salga a produccion no lo necesitamos
//morgan: mostrarnos por consola las peticiones(GET) que hagamos

app.use(express.json());// para detectar la estructura de JSON

app.use(mainRouter);//mandamos a llamar los routes

module.exports = app;

