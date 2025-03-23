import express from "express";
import dotenv from 'dotenv'
import { connectDB } from "./config/db.js";
import productRoutes from "./Routes/model.routes.js";
dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/products", productRoutes);

app.listen(3000, () => {
    connectDB();
  console.log('Server is running on http://localhost:3000');
});


//wEosO4OjAHtBehgS

