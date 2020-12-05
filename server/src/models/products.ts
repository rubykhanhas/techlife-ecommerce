import { Schema, model } from "mongoose";

const ProductSchema = new Schema({
    images: [String],
    title: String,
    price: Number,
    category: String,
    brand: String,
    sales: Number,
    salePrice: Number,
    sold: Number,
    remain: Number,
    shortDes: String,
    longDes: String
});

const Products = model("Products", ProductSchema, "products");
export { Products };
