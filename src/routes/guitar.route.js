import { createGuitar, getAllGuitars, getGuitarById, reduceStockGuitar, updateGuitar, deleteGuitar } from "../controllers/guitar.controller.js";
import { createGuitarSchema, updateGuitarSchema, reduceStockSchema } from "../validations/guitar.validation.js";
import validate from "../middlewares/validate.middleware.js";
import express from "express";

const router = express.Router();

router.post("/guitars", validate(createGuitarSchema), createGuitar);
router.get("/guitars", getAllGuitars);
router.get("/guitars/:id", getGuitarById);
router.put("/guitars/:id", validate(updateGuitarSchema), updateGuitar);
router.delete("/guitars/:id", deleteGuitar);
router.post("/guitars/:id/reduce-stock", validate(reduceStockSchema), reduceStockGuitar);

export default router;
