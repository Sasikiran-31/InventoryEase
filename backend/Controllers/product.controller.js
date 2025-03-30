import Product from "../models/product.model.js";
import mongoose from "mongoose";


export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ success: true, data: products });
  }
  catch (error) {
    console.error("Error fetching the products", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const createProduct = async (req, res) => {
  const product = req.body;
  if (!product.name || !product.price || !product.image) {
    return res.status(400).json({ success: false, message: "Please fill all fields" });
  }

  const newProduct = new Product(product);

  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.error("Error creating the product", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Product deleted" });
  } catch (error) {
    console.error("Error deleting the product", error);
    res.status(404).json({ success: false, message: "product Not found!" });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const product = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No product with that id");
  }

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true });
    console.log(updatedProduct);
    res.status(200).json({ success: true, data: updatedProduct });
  } catch (error) {
    console.error("Error updating the product", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};