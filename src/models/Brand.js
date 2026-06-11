import sequelize from "../utils/db.js";
import { DataTypes } from "sequelize";

const Brand = sequelize.define("Brand", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
});

export default Brand;