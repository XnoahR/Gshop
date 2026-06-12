import { createGuitar, getAllGuitars, getGuitarById, reduceStockGuitar, updateGuitar, deleteGuitar } from "../controllers/guitar.controller.js";
import { createGuitarSchema, updateGuitarSchema, reduceStockSchema } from "../validations/guitar.validation.js";
import validate from "../middlewares/validate.middleware.js";
import express from "express";

const router = express.Router();

router.post("/", validate(createGuitarSchema), createGuitar);
router.get("/", getAllGuitars);
router.get("/:id", getGuitarById);
router.put("/:id", validate(updateGuitarSchema), updateGuitar);
router.delete("/:id", deleteGuitar);
router.post("/:id/reduce-stock", validate(reduceStockSchema), reduceStockGuitar);

export default router;
