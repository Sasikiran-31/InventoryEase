import express from "express";
import dotenv from 'dotenv'
import { connectDB } from "./config/db.js";
import productRoutes from "./Routes/model.routes.js";

dotenv.config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log("Server is running on http://localhost:5000", + PORT);
});


//wEosO4OjAHtBehgS

