const mongoose = require("mongoose");
const {Schema} = mongoose;

const taskSchema = new Schema({
    title: {type:String, required:true},
    description: {type:String, required:true},
    deadline: {type:String, required:true},
    date: {type: Date, default: Date.now}
});

module.exports = mongoose.model("task",taskSchema);