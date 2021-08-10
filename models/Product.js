import mongoose from "mongoose";

const Product = mongoose.Schema(
    {
        id_product: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        stock: {
            type: String,
            required: true,
            min: 2
        },
    }
);

export default mongoose.model('Products', Product);