const express  = require("express");
const  mongoose = require('mongoose');
const order = require("../mongodb/routes/order");

const app = express();
//mongodb connection
mongoose
.connect("mongodb://localhost:27017/playground")
.then(()=>console.log("mongoDB is connected"))
.catch((err)=>
console.log("Error occured while creating mongodb",err)
);

//middleware
app.use(express.json());
app.use('/Order',order)


//Server connection
app.listen(8080,()=>console.log("Server is running on 8080......"));