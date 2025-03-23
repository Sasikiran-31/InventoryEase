import express from "express";
import dotenv from 'dotenv'
import { connectDB } from "./config/db.js";
dotenv.config();

const app = express();



app.get('/',(req, res) => {
    res.send('Backend is working');
});



app.listen(3000, () => {
    connectDB();
  console.log('Server is running on http://localhost:3000');
});


//wEosO4OjAHtBehgS

