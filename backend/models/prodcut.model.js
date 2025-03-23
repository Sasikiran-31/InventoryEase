import mongoose from "mongoose";


const productSchema = moongose.Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        default: 0,
    },
}, {
    timestamps: true,
});


const Product = mongoose.model("Product", productSchema);

export default Product;