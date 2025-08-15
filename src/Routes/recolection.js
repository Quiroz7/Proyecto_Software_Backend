import { Router } from "express";
import { crearRecoleccion, listarRecolecciones } from "../Controllers/recolection.js";

const router = Router();

router.post("/createrecoleccion", crearRecoleccion);
router.get("/listrecoleccion", listarRecolecciones);

export default router;
