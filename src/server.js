import app from "./app.js";
import sequelize from "./utils/db.js";

const port = process.env.PORT || 3000;

try {
  await sequelize.authenticate();
  console.log("Database connected");

  await sequelize.sync();

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
} catch (error) {
  console.error("Failed to connect database:", error);
}
