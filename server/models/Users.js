const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
    address: {
      geolocation:{
        lat: Number,
        long: Number,
      },
        city: String,
        street: String,
        number:Number,
        zipcode: String,
      },
      email: String,
      username: String,
      password: String,
      name: {
        firstname: String,
        lastname: String,
      },
      phone: String,
      __v: Number,
      role: String,
});

const UsersModel = mongoose.model("users", UsersSchema);
module.exports = UsersModel;