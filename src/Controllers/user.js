import { Users } from "../Models/users.js";


export const registrarUsuario = async (req, res) => {
  try {
    const { nombre_usuario, email, documento, password, telefono, ciudad } = req.body;
    const nuevoUsuario = await Users.create({
      nombre_usuario, email, documento, password, telefono, ciudad
    });
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const loginUsuario = async (req, res) => {
  try {
    const { email, password } = req.body;


    const usuario = await Users.findOne({ where: { email } });
    if (!usuario) {
      return res.status(404).json({ mensaje: "Usuario no encontrado" });
    }

    
    if (usuario.password !== password) {
      return res.status(401).json({ mensaje: "Contraseña incorrecta" });
    }

    
    res.status(200).json({ mensaje: "Login exitoso" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const listarUsuarios = async (req, res) => {
  try {
    const usuarios = await Users.findAll(); // Trae todos los usuarios
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



