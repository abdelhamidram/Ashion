const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UsersModel = require("./models/Users");
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://ramdani17:Jj9oKKYlQHAmWwlM@cluster0.gpzug0r.mongodb.net/Ashion?retryWrites=true&w=majority");

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

const port = 3000 || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
