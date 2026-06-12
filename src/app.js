import express from "express";
import cors from "cors";

import sequelize from "./utils/db.js";
import "./models/index.js";

import brandRoutes from "./routes/brand.route.js";
import categoryRoutes from "./routes/category.route.js";
import guitarRoutes from "./routes/guitar.route.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", brandRoutes);
app.use("/api", categoryRoutes);
app.use("/api", guitarRoutes);

app.get("/health", (req, res) => {
  res.send("Tes server");
});

export default app;
