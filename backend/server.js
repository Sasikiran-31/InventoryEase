import express from "express";
import dotenv from "dotenv";

const app = express();



app.get('/',(req, res) => {
    res.send('Backend is working');
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
dotenv.config();
console.log(process.env.MONGO_URI);


//wEosO4OjAHtBehgS

