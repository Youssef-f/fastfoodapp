import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import menuRoutes from "./routes/menuRoutes.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";

const swaggerDocument = YAML.load("./swagger.yaml");
dotenv.config();
const URL = process.env.MONGO_URL;
mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const port = process.env.PORT || 5000;
const app = express();
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.static(path.join(__dirname, "front-end")));
app.use(cors());
app.use(express.json());
app.use("/api", menuRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
