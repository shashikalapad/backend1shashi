const {User,validateUser} = require("../models/user")
const bcrypt = require("bcryptjs");




async function createUser(req,res){
    const {error} = validateUser(req.body);
if(error) res.status(400).send(error.details[0].message);

const {name,email,password} = req.body;
//check user existing or not
let user = await User.findOne({email})
if(user) return res.status(400).send('user is already existing');
try{
    console.log('creating new user');
    user = new User({name,email,password})
    console.log("before hashing user",user)
    // hash the password
    const salt = await bcrypt.genSalt(10);
    user.password = await  bcrypt.hash(password,salt);
    console.log("After hashing user",user)
    //save it on db

    const newUser = await user.save();
    
    return res.status(201).json({
        msg:"new user registered successfully",
        //data:newUser
        data:{
            name:newUser.name,
            email:newUser.email,
        },
    })
}catch(err){
    return res.status(500).json({
        msg:"Something went wrong...",
        error:err.message
    })
}
}
module.exports ={
    createUser,
}