import { DataTypes } from "sequelize";
import { sequelize } from "../Config/database.js";

export const Users = sequelize.define("User", {
  nombre_usuario: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  documento: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
  telefono: { type: DataTypes.STRING },
  ciudad: { type: DataTypes.STRING }
}, {
  tableName: "users",
  timestamps: false
});
