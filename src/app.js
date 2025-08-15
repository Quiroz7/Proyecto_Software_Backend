import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';

import usuarioRoutes from "./Routes/user.js";
import recoleccionRoutes from "./Routes/recolection.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", usuarioRoutes);
app.use("/api/recolection", recoleccionRoutes);

export default app;
