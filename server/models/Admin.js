const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema ({
    username: String,      
    password: String,      
    email: String,         
    firstName: String,     
    lastName: String,      
    role: String, 
});

const AdminModle = mongoose.model("Admin",AdminSchema);

module.exports = AdminModle

