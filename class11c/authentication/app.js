const express = require('express');
//bcrypt
const bcrypt = require("bcrypt");
const SALT_ROUNDS = 10;


const app = express();
app.use(express.json());
const hashedPassword ="";

app.post('/signup',async(req,res) => {
    const {username,password,email} = req.body;
    const salt = await bcrypt.genSalt(SALT_ROUNDS);
    console.log(`username - ${username},password-${password},email - ${email}`)
    console.log("salt",salt);
    const hashedPassword = await bcrypt.hash(password,salt);
    console.log(hashedPassword);
  return res.status(201).json({
    msg:"New user registered",
    data:{
        username,
        password,
    },
  })
})
app.post('/signin',async(req,res)=>{
const {username,password} =req.body;
console.log("in sign in ->hashed password",hashedPassword);
//hashed password from db
//here assume
// const result =await bcrypt.compare(password,hashedPassword)
//console.log("result",result);
const isValid =await bcrypt.compare(password,hashedPassword)
if(isValid)
return res.status(200).json({
    msg:"Logged in successfully"
});
return res.status(401).send("Invalid password");
})
app.listen(5000,()=>console.log("Server is running on port 5000..."));

