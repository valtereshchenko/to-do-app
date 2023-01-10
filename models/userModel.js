const mongoose = require('mongoose');

//to create a schema for our collection
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        uppercase: true,
        required: true,
        default: 'user'
    },
    email: {
        type: String,
        minlength: 8,
    },
    age: {
        type: Number,
        min: [18, 'Must be at least 18, got {VALUE}'],
        // validator: {
        //     validator: a => a > 18,
        //     message: 'Age needs to be 18 or more to enter!'
        // }
    },
    parent:{
        //to create relations between documents
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: "63bd389fe94237ab282fb0c7"
    }
})

module.exports = new mongoose.model("User", userSchema)