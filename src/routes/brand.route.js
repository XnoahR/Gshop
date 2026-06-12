import { createBrand, getAllBrands, getBrandById, updateBrand, deleteBrand } from "../controllers/brand.controller.js";
import { createBrandSchema, updateBrandSchema } from "../validations/brand.validation.js";
import validate from "../middlewares/validate.js";
import express from "express";

const router = express.Router();

router.post("/brands", validate(createBrandSchema), createBrand);
router.get("/brands", getAllBrands);
router.get("/brands/:id", getBrandById);
router.put("/brands/:id", validate(updateBrandSchema), updateBrand);
router.delete("/brands/:id", deleteBrand);

export default router;
