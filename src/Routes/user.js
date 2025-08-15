import { Router } from "express";
import { registrarUsuario, loginUsuario } from "../Controllers/user.js";

const router = Router();

router.post("/createuser", registrarUsuario);
router.post("/login", loginUsuario);

export default router;
