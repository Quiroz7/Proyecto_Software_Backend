import { Recolections } from "../Models/recolection.js";

export const crearRecoleccion = async (req, res) => {
  try {
    const { fecha, tipo_residuo } = req.body;

    const nuevaRecoleccion = await Recolections.create({ fecha, tipo_residuo });

    res.status(201).json({
      mensaje: "Registro exitoso",
      data: nuevaRecoleccion
    });
    
  } catch (error) {
    res.status(500).json({
      mensaje: "Ocurrió un error al registrar la recolección",
      error: error.message
    });
  }
};


export const listarRecolecciones = async (req, res) => {
  try {
    const recolecciones = await Recolections.findAll();

    if (!recolecciones || recolecciones.length === 0) {
      return res.status(200).json({ mensaje: "No hay registros disponibles" });
    }

    res.status(200).json(recolecciones);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

