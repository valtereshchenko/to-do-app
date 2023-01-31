const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    text: String,
    completed: Boolean,
    parent:{
        //to create relations between documents
        type: mongoose.Schema.Types.ObjectId,
        ref: "Task"
    }
})

module.exports = new mongoose.model("Task", taskSchema)