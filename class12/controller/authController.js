const bcrypt = require('bcryptjs');
const Joi  = require('joi');
const {User} = require('../models/user');

async function login(req,res){
    const {error} = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    const {email,password}= req.body;
    //check email and password
    let user = await User.findOne({email})
    if(!user) return res.status(404).send('user not registered');
    try{
 //compare password
 const isValid = await bcrypt.compare(password,user.password);
 console.log(user.password);
 console.log(password);
    // if(!isValid)
    if(password!==user.password) return res.status(400).send('Invalid email or password');
     return res.status(200).json({
         msg:"user logged in successfully",
         login:true,
     })
    }catch(err){
     return res.status(500).json({
         msg:"Something went wrong...",
         error:err.message,
         login:false,
     })
    } 
}
const validate = (req)=>{
    const schema =Joi.object({
        email:Joi.string().required().email(),
        password:Joi.string().required(),
    })
    return schema.validate(req);
}
module.exports = {
    login,
}