import { DataTypes } from "sequelize";
import { sequelize } from "../Config/database.js";

export const Recolections = sequelize.define("Recolection", {
  fecha: { type: DataTypes.DATEONLY, allowNull: false },
  tipo_residuo: { type: DataTypes.STRING, allowNull: false }
}, {
  tableName: "recolections",
  timestamps: false
});
