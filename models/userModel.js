const mongoose = require('mongoose');

//to create a schema for our collection
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        
    },
    email: {
        type: String,
        required: true,
        minlength: 6,
    },
    password: {
        type: String,
        required: true,
        minLength: 5
    }
    
})

module.exports = new mongoose.model("User", userSchema)