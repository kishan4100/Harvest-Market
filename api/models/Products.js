const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    inStock: { type: Boolean, default: true },
    unit: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductsSchema);
