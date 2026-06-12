import Brand from "./Brand.js";
import Category from "./Category.js";
import Guitar from "./Guitar.js";

Brand.hasMany(Guitar, {
    foreignKey: "brandId",
    onDelete: "RESTRICT",
    onUpdate: "CASCADE"
});

Category.hasMany(Guitar, {
    foreignKey: "categoryId",
    onDelete: "RESTRICT",
    onUpdate: "CASCADE"    
});

Guitar.belongsTo(Brand, {
    foreignKey: "brandId",
    onDelete: "RESTRICT",
    onUpdate: "CASCADE"
});

Guitar.belongsTo(Category, {
    foreignKey: "categoryId",
    onDelete: "RESTRICT",
    onUpdate: "CASCADE"
});

export {
    Brand,
    Category,
    Guitar
};