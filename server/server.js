const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UsersModel = require("./models/Users");
const ProductsModel = require("./models/Products")
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://ramdani17:Jj9oKKYlQHAmWwlM@cluster0.gpzug0r.mongodb.net/Ashion?retryWrites=true&w=majority");


/* start db for users */

app.get("/users", async (req, res) => {
  const users = await UsersModel.find();
  res.json(users);
});

app.post("/createUser", async (req, res) => {
  try {
    const newUser = new UsersModel(req.body);
    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (error) {
    res.status(500).json({ error: "Failed to create user." });
  }
});

/* end db for users */

/* start db for Products */

app.get("/products", async (req, res) => {
  const products = await ProductsModel.find();
  res.json(products);
});

app.post("/createProduct", async (req, res) => {
  try {
    const newProduct = new ProductsModel(req.body);
    const savedProduct = await newProduct.save();
    res.json(savedProduct);
  } catch (error) {
    res.status(500).json({ error: "Failed to add Product." });
  }
});

/* end db for Products */



const port = 3000 || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
