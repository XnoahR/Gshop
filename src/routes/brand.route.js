import { createBrand, getAllBrands, getBrandById, updateBrand, deleteBrand } from "../controllers/brand.controller.js";
import { createBrandSchema, updateBrandSchema } from "../validations/brand.validation.js";
import validate from "../middlewares/validate.middleware.js";
import express from "express";

const router = express.Router();

router.post("/", validate(createBrandSchema), createBrand);
router.get("/", getAllBrands);
router.get("/:id", getBrandById);
router.put("/:id", validate(updateBrandSchema), updateBrand);
router.delete("/:id", deleteBrand);

export default router;
