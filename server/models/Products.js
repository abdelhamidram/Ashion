const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema({
   id: Number,
   title: String,
   price: Number,
   description: String,
   category: String,
   image: String,
   rating: {
    rate: Number,
    count: Number,
   },
});

const ProductsModel = mongoose.model("Products", ProductsSchema);
module.exports = ProductsModel;