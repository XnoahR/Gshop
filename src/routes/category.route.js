import { createCategory, getAllCategories, getCategoryById, updateCategory, deleteCategory } from "../controllers/category.controller.js";
import { createCategorySchema, updateCategorySchema } from "../validations/category.validation.js";
import validate from "../middlewares/validate.middleware.js";
import express from "express";

const router = express.Router();

router.post("/categories", validate(createCategorySchema), createCategory);
router.get("/categories", getAllCategories);
router.get("/categories/:id", getCategoryById);
router.put("/categories/:id", validate(updateCategorySchema), updateCategory);
router.delete("/categories/:id", deleteCategory);

export default router;
