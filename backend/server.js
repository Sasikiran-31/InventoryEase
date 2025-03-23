import express from "express";
import dotenv from 'dotenv'
import { connectDB } from "./config/db.js";
import Product from "./models/product.model.js";
dotenv.config();

const app = express();

app.use(express.json());

app.get('/',(req, res) => {
    res.send('Backend is working');
});

app.post("/api/products", async(req, res) => {
  const product = await Product.create(req.body);
  if (!product.name || !product.price || !product.image) {
    return res.status(400).json({ success :false,message: "Please fill all fields" });
  }

  const newProduct = new Product(product);

  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.error("Error creating the product", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

app.listen(3000, () => {
    connectDB();
  console.log('Server is running on http://localhost:3000');
});


//wEosO4OjAHtBehgS

