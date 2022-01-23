const mongoose = require("mongoose");
const {Schema} = mongoose;
const bcrypt = require("bcryptjs");

const UserSchema = new Schema({
    username:{type:String,required:true},
    password: {type:String,required:true},
    email:{type:String,required:false},
    date:{type:Date,default:Date.now}
});
UserSchema.methods.encrypt = async (password) =>{
    const salt = await bcrypt.genSalt();
    const hash = bcrypt.hash(password,salt);
    return hash;
},
UserSchema.methods.compare = async function(password){
    return await bcrypt.compare(password,this.password);
}

module.exports = mongoose.model("User",UserSchema);