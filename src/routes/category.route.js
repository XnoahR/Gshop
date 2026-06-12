import { createCategory, getAllCategories, getCategoryById, updateCategory, deleteCategory } from "../controllers/category.controller.js";
import { createCategorySchema, updateCategorySchema } from "../validations/category.validation.js";
import validate from "../middlewares/validate.middleware.js";
import express from "express";

const router = express.Router();

router.post("/", validate(createCategorySchema), createCategory);
router.get("/", getAllCategories);
router.get("/:id", getCategoryById);
router.put("/:id", validate(updateCategorySchema), updateCategory);
router.delete("/:id", deleteCategory);

export default router;
