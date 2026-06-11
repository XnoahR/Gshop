import Brand from "./Brand.js";
import Category from "./Category.js";
import Guitar from "./Guitar.js";

Brand.hasMany(Guitar, {
    foreignKey: "brandId"
});

Category.hasMany(Guitar, {
    foreignKey: "categoryId"
});

Guitar.belongsTo(Brand, {
    foreignKey: "brandId"
});

Guitar.belongsTo(Category, {
    foreignKey: "categoryId"
});

export {
    Brand,
    Category,
    Guitar
};