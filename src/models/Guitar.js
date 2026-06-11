import sequelize from "../utils/db.js";
import { DataTypes } from "sequelize";

const Guitar = sequelize.define("Guitar", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description : {
        type: DataTypes.TEXT,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    brandId :{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Brands',
            key: 'id'
        }
    },
    categoryId :{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Categories',
            key: 'id'
        }
    }
})

export default Guitar;