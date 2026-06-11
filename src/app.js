import express from "express"
import sequelize from "./utils/db.js";
const app  = express()
const port = 3000;

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})



app.get("/", (req, res) => {
    res.send("Hello World")
})