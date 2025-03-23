import express from "express";
import dotenv from 'dotenv'
import { connectDB } from "./config/db.js";
import Product from "./models/product.model.js";
import mongoose, { mongo } from "mongoose";
dotenv.config();

const app = express();

app.use(express.json());

app.get('/api/products', async (req, res) => {
    try{
      const products = await Product.find({});
      res.status(200).json({ success: true, data: products });
    }
    catch(error){
      console.error("Error fetching the products", error);
      res.status(500).json({ success: false, message: "Server error" });
  }
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


app.delete("/api/products/:id", async (req, res) => {
  const {id} = req.params;
  try{
    await Product.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Product deleted" });
  }catch(error){
    console.error("Error deleting the product", error);
    res.status(404).json({ success: false, message: "product Not found!" });
  }  
});


app.put("/api/products/:id", async (req, res) => {
  const {id} = req.params;
  const product = req.body;

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).send("No product with that id");
  }

  try{
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {new: true});
      console.log(updatedProduct);
    res.status(200).json({ success: true, data: updatedProduct });
  }catch(error){
    console.error("Error updating the product", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
}
);

app.listen(3000, () => {
    connectDB();
  console.log('Server is running on http://localhost:3000/api/products');
});


//wEosO4OjAHtBehgS

