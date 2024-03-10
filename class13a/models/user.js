const mongoose = require('mongoose');
const Joi = require('joi');

const userSchema = new mongoose.Schema({
 name:{
    type:String,
    required:true,
 },
 email:{
    type:String,
    required:true,
    unique:true,
 },
 password:{
    type:String,
    required:true,
 },     
});
//create model
const User = mongoose.model("user",userSchema);

//validate
const validateUser = (user)=>{
    const schema =Joi.object({
        name:Joi.string().required().min(3).max(15),
        email:Joi.string().required().email(),
        password:Joi.string().required(),
    });
    return schema.validate(user)
}
module.exports = {
    User,
    validateUser,
}


