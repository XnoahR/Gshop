import { createBrand, getAllBrands, getBrandById, updateBrand, deleteBrand } from "../controllers/brand.controller.js";
import express from "express";

const router = express.Router();

router.post("/brands", createBrand);
router.get("/brands", getAllBrands);
router.get("/brands/:id", getBrandById);
router.put("/brands/:id", updateBrand);
router.delete("/brands/:id", deleteBrand);

export default router;