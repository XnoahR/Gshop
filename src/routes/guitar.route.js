import { createGuitar, getAllGuitars, getGuitarById, reduceStockGuitar, updateGuitar, deleteGuitar } from "../controllers/guitar.controller.js";
import express from "express";

const router = express.Router();

router.post("/guitars", createGuitar);
router.get("/guitars", getAllGuitars);
router.get("/guitars/:id", getGuitarById);
router.put("/guitars/:id", updateGuitar);
router.delete("/guitars/:id", deleteGuitar);
router.post("/guitars/:id/reduce-stock", reduceStockGuitar);

export default router;