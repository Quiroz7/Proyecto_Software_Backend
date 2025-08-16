import { Router } from "express";
import { registrarUsuario, loginUsuario, listarUsuarios } from "../Controllers/user.js";

const router = Router();

router.post("/createuser", registrarUsuario);
router.post("/login", loginUsuario);
router.get("/listar", listarUsuarios);

export default router;
