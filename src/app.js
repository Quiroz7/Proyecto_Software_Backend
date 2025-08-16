import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';

import usuarioRoutes from "./Routes/user.js";
import recoleccionRoutes from "./Routes/recolection.js";

dotenv.config();

const app = express();

app.use(cors());//para permitir solicitudes de diferentes orígenes
app.use(express.json());//parcea el cuerpo de las solicitudes a formato JSON
app.use(morgan('dev'));//para registrar las solicitudes HTTP en la consola
app.use(express.urlencoded({ extended: true }));//para analizar el cuerpo de las solicitudes URL-encoded

app.use("/api/user", usuarioRoutes);
app.use("/api/recolection", recoleccionRoutes);

export default app;
